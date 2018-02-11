'use strict'

import { expect } from 'chai'
import {some} from "./some-recursive";

it('some is not be a function', () => {
  expect(some).to.be.a('function')
})

it('some([], item => item) should return false', () => {
  expect(some([], item => item)).to.not.be.ok
})

it('some([1, 2], item => item) should return true', () => {
  expect(some([1, 2], item => item)).to.be.ok
})

it('some([1, 2, 3], (item, index) => item+index === 5) should return true', () => {
  expect(some([1, 2, 3], (item, index) => item+index === 5)).to.be.ok
})

it('some([1, 2, 4], (item, index) => item+index === 5) should return false', () => {
  expect(some([1, 2, 4], (item, index) => item+index === 5)).to.not.be.ok
})

it('some([1, 2, 4], (item, index, array) => array.indexOf(2) === 1) should return true', () => {
  expect(some([1, 2, 4], (item, index, array) => array.indexOf(2) === 1)).to.be.ok
})