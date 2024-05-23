import { test, expect } from '@jest/globals'
import { getMax } from '../../src/arrays/rest-operator.js'

test('getMax', () => {
  expect(getMax([])).toBeNull()
  expect(getMax([0])).toEqual(0)
  expect(getMax([1, 3, 2, 0])).toEqual(3)
  expect(getMax([1, 3, 2, 0, -12, 32, 5, -1])).toEqual(32)
  expect(getMax([-1, -2, -3, -4])).toEqual(-1)
})
