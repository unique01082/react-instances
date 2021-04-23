import { isEmpty } from 'lodash'
import { useEffect, useRef } from 'react'
import { deepDiff } from '../utils'

export default function useObserversNotify(Component, name, ...data) {
  const ref = useRef()

  useEffect(() => {
    const values = data.length > 1 ? Object.assign({}, ...data) : data[0]
    const diff = deepDiff(values, ref.current)
    if (!isEmpty(diff)) {
      Component.notifyObservers(name, diff, ...data)
    }
    ref.current = values
  }, [...data])
}
