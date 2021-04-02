import { useState, useEffect } from 'react'
import { pick, get, isEqual, transform, isObject } from 'lodash'
import moment from 'moment'

export function diff(object, base) {
  if (typeof object !== typeof base) {
    return object
  }
  if (moment.isMoment(object) && moment.isMoment(base)) {
    return object.isSame(base) ? {} : object
  }

  return transform(object, function a(result, value, key) {
    if (!isEqual(value, base[key])) {
      Object.assign(result, {
        [key]:
          isObject(value) && isObject(base[key])
            ? diff(value, base[key])
            : value
      })
    }
  })
}

function useObserver(observable, name, fields, initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    observable.addObserver(
      name,
      function observer(values) {
        if (fields) {
          const isSingleField = typeof fields === 'string'
          const newValues = isSingleField
            ? get(values, fields)
            : pick(values, fields)
          const isDiff = isSingleField
            ? !isEqual(newValues, this.previousValues)
            : Object.keys(diff(newValues, this.previousValues)).length !== 0
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
  }, [])

  return value
}

export default useObserver
