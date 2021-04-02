import SYMBOLS from '../symbols'

export default function withObservable(Component) {
  Component[SYMBOLS.OBSERVERS] = new Map()

  Component.getObservers = () => Component[SYMBOLS.OBSERVERS]

  Component.getObserver = (key) => Component.observers.get(key) ?? []

  Component.addObserver = (key, watcher) => {
    if (!Component.observers.has(key)) {
      Component.observers.set(key, [])
    }
    Component.getObservers(key).push(watcher)
  }

  Component.removeObserver = (key) => {
    if (Component.observers.has(key)) {
      Component.observers.delete(key)
    }
  }

  return Component
}
