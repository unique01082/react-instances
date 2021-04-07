import { useEffect } from 'react'

export default function useObserversNotify(Component, name, ...data) {
  useEffect(() => {
    const values = Object.assign({}, ...data)
    Component.getObserver(name).forEach((watcher) => watcher(values))
  }, [...data])
}
