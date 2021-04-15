import { observable, useObserversNotify } from '..'

export default function withHookObserversNotify(hook) {
  observable(hook)

  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(target, thisArgument, [name, ...args]) {
      const result = Reflect.apply(target, thisArgument, args)

      useObserversNotify(hook, name, result)

      return result
    }
  })
}
