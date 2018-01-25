'use strict'

export const every = (arr, func) => {
  return (function everyInternal (arrInternal, count) {
    const [head, ...tail] = arrInternal
    
    return !arrInternal.length ? true : (
      !func(head, count, arr) ? false : everyInternal(tail, count+1)
    )
  })(arr, 0)
}
