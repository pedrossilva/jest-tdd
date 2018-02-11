'use strict'

export const find = (arr, func) => {

  return (function findInternal(arrInternal, count = 0) {
    const [head, ...tail] = arrInternal
    return arrInternal.length === 0
      ? undefined
      : func(head, count, arr)
        ? head
        : findInternal(tail, count + 1)

  })(arr)
}