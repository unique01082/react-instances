import { uuidv4 } from '../utils'
import SYMBOLS from './symbols'

export default function observable(Component) {
  Component[SYMBOLS.OBSERVERS] = new Map()

  Component.getObservers = () => Component[SYMBOLS.OBSERVERS]

  Component.hasObserver = (key) => Component.getObservers().has(key)
  Component.getObserver = (key) =>
    Component.hasObserver(key) ? Component.getObservers().get(key) : new Map()

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

  Component.removeObserver = (key, id) => {
    if (Component.hasObserver(key)) {
      Component.getObserver(key).delete(id)
    }
  }

  return Component
}
