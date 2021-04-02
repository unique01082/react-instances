import { useEffect } from 'react'

export default function withHookObserversNotify(hook, getName) {
  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(...args) {
      const result = Reflect.apply(...args)
      useEffect(() => {
        hook
          .getObservers(getName(...args[2]))
          .forEach((watcher) => watcher(result))
      }, [result])
      return result
    }
  })
}
