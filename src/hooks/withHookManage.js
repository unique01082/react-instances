import { useEffect } from 'react'

export default function withHookManage(hook, getName) {
  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(...args) {
      const result = Reflect.apply(...args)

      hook.addInstance(getName(...args[2]), result)
      useEffect(() => {
        hook
          .getObservers(getName(...args[2]))
          .forEach((watcher) => watcher(result))
      }, [result])
      useEffect(() => () => hook.removeInstance(getName(...args[2])), [])
      return result
    }
  })
}
