import { ManageableInstance } from '../type'
import { INSTANCES } from './symbols'

export default function manageInstances(
  Component: ManageableInstance
): ManageableInstance {
  Component[INSTANCES] = new Map<any, React.ReactNode>()

  Component.getInstances = () => Component[INSTANCES]

  Component.hasInstance = (key) =>
    Component.getInstances().has(key) && !!Component.getInstances().get(key)

  Component.getInstance = (key) => Component.getInstances().get(key)

  Component.addInstance = (key, instance) =>
    Component.getInstances().set(key, instance)

  Component.removeInstance = (key) => Component.getInstances().delete(key)

  return Component
}
