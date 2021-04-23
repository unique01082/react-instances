import { useState, useEffect } from 'react'
import { pick, get, has } from 'lodash'

export default function useObserver(observable, name, fields, initialValue) {
  const [previousValues, setPreviousValues] = useState(initialValue)

  useEffect(() => {
    const id = observable.addObserver(
      name,
      function observer(diff, currentValues) {
        if (fields) {
          const isSingleField = typeof fields === 'string'
          const isChanged = isSingleField
            ? has(diff, fields)
            : fields.some((field) => has(diff, field))
          if (isChanged) {
            setPreviousValues(
              (isSingleField ? get : pick)(currentValues, fields)
            )
          }
        } else {
          if (!useObserver.isEqual(currentValues, previousValues)) {
            setPreviousValues(currentValues)
          }
        }
      }
    )

    return () => {
      observable.removeObserver(name, id)
    }
  }, [])

  return previousValues
}
