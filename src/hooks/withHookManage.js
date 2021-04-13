import { useEffect } from 'react'
import { manageInstances, observable } from '..'

export default function withHookManage(hook) {
  manageInstances(hook)
  observable(hook)

  return new Proxy(hook, {
    get: Reflect.get,
    set: Reflect.set,
    apply(target, thisArgument, [name, ...args]) {
      const result = Reflect.apply(target, thisArgument, args)

      hook.addInstance(name, result)
      useEffect(() => {
        hook.getObservers(name).forEach((watcher) => watcher(result))
      }, [result])
      useEffect(() => () => hook.removeInstance(name), [])
      return result
    }
  })
}
