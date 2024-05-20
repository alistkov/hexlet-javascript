import { test, expect } from '@jest/globals'
import calcualteSum from '../../src/arrays/aggregation.js'

test('calculate sum of numbers', () => {
  expect(calcualteSum([])).toBe(0)
  expect(calcualteSum([8, 9, 21, 19, 18, 22, 7])).toBe(48)
  expect(calcualteSum([2, 0, 17, 3, 9, 15, 4])).toBe(27)
})
