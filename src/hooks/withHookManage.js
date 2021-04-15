import {
  manageInstances,
  observable,
  useInstanceManage,
  useObserversNotify
} from '..'

export default function withHookManage(hook) {
  manageInstances(hook)
  observable(hook)

  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(target, thisArgument, [name, ...args]) {
      const result = Reflect.apply(target, thisArgument, args)

      useInstanceManage(hook, name, result)
      useObserversNotify(hook, name, result)

      return result
    }
  })
}
