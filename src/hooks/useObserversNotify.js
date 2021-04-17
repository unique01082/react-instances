import { useEffect } from 'react'

export default function useObserversNotify(Component, name, ...data) {
  useEffect(() => {
    Component.notifyObservers(name, ...data)
  }, [...data])
}
