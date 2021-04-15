import { useEffect } from 'react'

export default function useInstanceManage(Component, name, ...data) {
  Component.addInstance(name, Object.assign({}, ...data))

  useEffect(
    () => () => {
      Component.removeInstance(name)
    },
    []
  )
}
