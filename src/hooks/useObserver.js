import { useState, useEffect } from 'react'
import { pick, get, isEqual, transform, isObject } from 'lodash'

export function deepDiff(object, base, path = []) {
  if (typeof object !== typeof base) {
    return object
  }

  return transform(object, function a(result, value, key) {
    if (!useObserver.isEqual(value, base[key], path)) {
      Object.assign(result, {
        [key]:
          isObject(value) && isObject(base[key])
            ? deepDiff(value, base[key], path.concat(key))
            : value
      })
    }
  })
}

function useObserver(observable, name, fields, initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const id = observable.addObserver(
      name,
      function observer(values) {
        if (fields) {
          const isSingleField = typeof fields === 'string'
          const newValues = isSingleField
            ? get(values, fields)
            : pick(values, fields)
          const isDiff = isSingleField
            ? !isEqual(newValues, this.previousValues)
            : Object.keys(deepDiff(newValues, this.previousValues)).length !== 0
          if (isDiff) {
            setValue(newValues)
          }
          this.previousValues = newValues
        } else {
          if (values !== value) {
            setValue(values)
          }
          this.previousValues = values
        }
      }.bind({ previousValues: initialValue })
    )

    return () => {
      observable.removeObserver(name, id)
    }
  }, [])

  return value
}

useObserver.isEqual = isEqual

export default useObserver
