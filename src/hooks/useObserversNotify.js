import { useEffect } from 'react'

export default function useObserversNofify(Component, name, ...data) {
  useEffect(() => {
    const values = Object.assign({}, ...data)
    Component.getObservers(name).forEach((watcher) => watcher(values))
  }, [...data])
}
