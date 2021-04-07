import SYMBOLS from './symbols'

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export default function withObservable(Component) {
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

  Component.removeObserver = (key, id) => {
    if (Component.hasObserver(key)) {
      Component.getObserver(key).delete(id)
    }
  }

  return Component
}
