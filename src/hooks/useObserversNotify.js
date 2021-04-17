import { useEffect } from 'react'

export default function useObserversNotify(Component, name, ...data) {
  useEffect(() => {
    Component.notifyObservers(
      name,
      data.length > 1 ? Object.assign({}, ...data) : data[0]
    )
  }, [...data])
}
