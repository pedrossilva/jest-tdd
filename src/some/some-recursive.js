'use strict'

export const some = (arr, func) => {
  return (function someInternal(arrInternal, count) {
    const [head, ...tail] = arrInternal
    return !arrInternal.length ? false :
      (func(head, count, arr) ? true : someInternal(tail, count+1))
  })(arr, 0)
}