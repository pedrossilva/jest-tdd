'use strict'

export const reverse = (arr) => {
  const newArr = []
  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i-1])
  }
  return newArr
}