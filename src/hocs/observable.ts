import { ObservableInstance, Watcher } from '../type'
import { uuidv4 } from '../utils'
import { OBSERVERS } from './symbols'

export default function observable(
  Component: ObservableInstance
): ObservableInstance {
  Component[OBSERVERS] = new Map<any, Map<any, Watcher>>()

  Component.getObservers = () => Component[OBSERVERS]

  Component.hasObserver = (key) => Component.getObservers().has(key)
  Component.getObserver = (key) =>
    Component.hasObserver(key)
      ? (Component.getObservers().get(key) as Map<any, Watcher>)
      : new Map<any, Watcher>()

  Component.addObserver = (key, watcher) => {
    if (!Component.hasObserver(key)) {
      Component.getObservers().set(key, new Map())
    }

    const uuid = uuidv4()
    Component.getObserver(key).set(uuid, watcher)

    return uuid
  }

  Component.notifyObservers = (name, diff, ...data) => {
    const values = data.length > 1 ? Object.assign({}, ...data) : data[0]
    Component.getObserver(name).forEach((watcher) => watcher(diff, values))
  }

  Component.removeObserver = (key, id) =>
    Component.hasObserver(key) ? Component.getObserver(key).delete(id) : false

  return Component
}
