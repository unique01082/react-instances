import observable from './observable'
import { useObserversNotify } from '..'

export default function observableFc(functionComponent) {
  const proxy = new Proxy(functionComponent, {
    apply: (target, thisArg, [props, ref, instances = {}]) =>
      Reflect.apply(target, thisArg, [
        props,
        ref,
        Object.assign(instances, {
          useObserversNotify: (value) =>
            useObserversNotify(functionComponent, props.name, value)
        })
      ])
  })

  return observable(proxy)
}
