'use strict'

export const filter = (arr, func) => {
  return (function internalFilter(internalArr, count) {
    return !internalArr.length ? [] : (() => {
      const [head, ...tail] = internalArr
      const newTail = internalFilter(tail, count+1)
      return !!func(head, count, arr) ? [head, ...newTail] : newTail
    })()
  })(arr, 0)
}
