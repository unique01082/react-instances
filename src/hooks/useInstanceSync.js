import { useEffect } from 'react'

export default function useInstanceSync(Component, name, ...data) {
  useEffect(() => {
    Component.addInstance(name, Object.assign({}, ...data))
  })
}
