import SYMBOLS from './symbols'

export default function manageInstances(Component) {
  Component[SYMBOLS.INSTANCES] = new Map()

  Component.getInstances = () => Component[SYMBOLS.INSTANCES]

  Component.hasInstance = (key) =>
    Component.getInstances().has(key) && Component.getInstances().get(key)

  Component.getInstance = (key) => Component.getInstances().get(key)

  Component.addInstance = (key, instance) =>
    Component.getInstances().set(key, instance)

  Component.removeInstance = (key) => Component.getInstances().delete(key)

  return Component
}
