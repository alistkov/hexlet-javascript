import { test, expect } from '@jest/globals'
import calculateAverage from '../../src/arrays/for-of.js'

test('calculateAverage', () => {
  expect(calculateAverage([])).toBeNull()
  expect(calculateAverage([2, 4])).toBe(3)
  expect(calculateAverage([36, 37.4, 39, 41, 36.6])).toBe(38)
})
