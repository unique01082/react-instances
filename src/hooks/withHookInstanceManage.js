import { manageInstances, useInstanceManage } from '..'

export default function withHookInstanceManage(hook) {
  const managedHook = manageInstances(hook)

  return new Proxy(managedHook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(target, thisArgument, [name, ...args]) {
      const result = Reflect.apply(target, thisArgument, args)

      useInstanceManage(managedHook, name, result)

      return result
    }
  })
}
