import { useEffect } from 'react'

export default function useInstanceInit(Component, name, ...data) {
  useEffect(() => {
    Component.addInstance(name, Object.assign({}, ...data))
  }, [])
}
