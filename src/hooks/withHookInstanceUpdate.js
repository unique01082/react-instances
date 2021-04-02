import { useEffect } from 'react'

export default function withHookObserversNotify(hook, getName) {
  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(...args) {
      useEffect(() => () => hook.removeInstance(getName(...args[2])), [])

      const result = Reflect.apply(...args)
      hook.addInstance(getName(...args[2]), result)

      return result
    }
  })
}
