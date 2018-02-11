'use strict'

export const reverse = (arr) => {
  return !(arr = [...arr]).length ? [] : [ arr.pop(), ...reverse(arr) ]
}
