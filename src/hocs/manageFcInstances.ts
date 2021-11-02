import { useInstanceManage } from '..'
import { ManageableFcInstance } from '../type'
import manageInstances from './manageInstances'

export default function manageFcInstances(
  functionComponent: ManageableFcInstance
) {
  const proxy = new Proxy<ManageableFcInstance>(functionComponent, {
    apply: (target, thisArg, [props, ref, instances = {}]) =>
      Reflect.apply(target, thisArg, [
        props,
        ref,
        Object.assign(instances, {
          useInstanceManage: (value: any) =>
            useInstanceManage(functionComponent, props.name, value)
        })
      ])
  })

  return manageInstances(proxy)
}
