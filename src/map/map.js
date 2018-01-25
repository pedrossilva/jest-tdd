'use strict'

export const map = (arr = [], func = item => item) => {
  return arr.map((v, i) => func(arr[i], i, arr))
}
