'use strict'

export const mainReduce = (arr, func, initialValue) => {
  const hasValue = (initialValue === undefined)
  const acc = hasValue ? arr[0] : initialValue
  const arrCopy = hasValue ? arr.slice(1) : arr

  return (function reduceInternal(accInternal, arrInternal, count) {
    const [head, ...tail] = arrInternal
    const accNext = () => func(accInternal, head, count, arrCopy)
    return arrInternal.length === 0 ? accInternal : reduceInternal(accNext(), tail, count + 1)
  })(acc, arrCopy, 0)
}