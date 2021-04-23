import { get, set, transform, isObject } from 'lodash'
import { useObserver } from '.'

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

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}
