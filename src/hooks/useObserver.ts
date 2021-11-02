// @ts-nocheck
import { get, has, isEqual, pick } from 'lodash'
import { useEffect, useState } from 'react'
import { ObservableInstance } from '../type'

function useObserver(
  observable: ObservableInstance,
  name: any,
  fields?: string | string[],
  initialValue?: any
) {
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

useObserver.isEqual = isEqual

export function setEqual(fn) {
  useObserver.isEqual = fn
}

export default useObserver
