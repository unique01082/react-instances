import { useEffect } from 'react'

export default function useInstanceManage(Component, name, ...data) {
  Component.addInstance(
    name,
    data.length > 1 ? Object.assign({}, ...data) : data[0]
  )

  useEffect(
    () => () => {
      Component.removeInstance(name)
    },
    []
  )
}
