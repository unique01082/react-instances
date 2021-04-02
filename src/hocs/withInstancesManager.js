import SYMBOLS from '..hooks/symbols'

export default function withInstancesManager(Component) {
  Component[SYMBOLS.INSTANCES] = new Map()

  Component.getInstances = () => Component[SYMBOLS.INSTANCES]

  Component.getInstance = (key) => Component.getInstances().get(key)

  Component.addInstance = (key, instance) =>
    Component.getInstances().set(key, instance)

  Component.removeInstance = (key) => Component.getInstances().delete(key)

  Component.isInstanceExist = (key) =>
    Component.getInstances().has(key) && Component.getInstances().get(key)

  return Component
}
