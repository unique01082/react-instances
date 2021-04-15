import { useState, useEffect } from 'react'
import { pick, get, set, transform, isObject, isEmpty } from 'lodash'

export function deepDiff(current, previous, path = []) {
  if (typeof current !== typeof previous) {
    return current
  }

  return transform(
    current,
    function iteratee(result, value, key) {
      if (!useObserver.isEqual(value, get(previous, key), path)) {
        set(
          result,
          key,
          isObject(value) && isObject(get(previous, key))
            ? deepDiff(value, get(previous, key), path.concat(key))
            : value
        )
      }
    },
    {}
  )
}

export default function useObserver(observable, name, fields, initialValue) {
  const [previousValues, setPreviousValues] = useState(initialValue)

  useEffect(() => {
    const id = observable.addObserver(
      name,
      function observer(currentValues) {
        if (fields) {
          const isSingleField = typeof fields === 'string'
          const pickedCurrentValues = isSingleField
            ? get(currentValues, fields)
            : pick(currentValues, fields)
          const isEqual = isSingleField
            ? useObserver.isEqual(pickedCurrentValues, this.previousValues)
            : isEmpty(deepDiff(pickedCurrentValues, this.previousValues))
          if (!isEqual) {
            setPreviousValues(pickedCurrentValues)
          }
          this.previousValues = pickedCurrentValues
        } else {
          if (!useObserver.isEqual(currentValues, previousValues)) {
            setPreviousValues(currentValues)
          }
          this.previousValues = currentValues
        }
      }.bind({ previousValues: initialValue })
    )

    return () => {
      observable.removeObserver(name, id)
    }
  }, [])

  return previousValues
}
