import { useEffect } from 'react'
import { withInstancesManager, withObservable } from 'react-instances'

export default function withHookManage(hook) {
  withInstancesManager(hook)
  withObservable(hook)

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
