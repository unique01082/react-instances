import { useEffect } from 'react'
import { withObservable } from '..'

export default function withHookObserversNotify(hook) {
  withObservable(hook)

  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(target, thisArgument, [name, ...args]) {
      const result = Reflect.apply(target, thisArgument, args)
      useEffect(() => {
        hook.getObserver(name).forEach((watcher) => watcher(result))
      }, [result])

      return result
    }
  })
}
