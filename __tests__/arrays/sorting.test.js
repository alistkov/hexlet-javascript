import { test, expect } from '@jest/globals'
import bubbleSorting from '../../src/arrays/sorting.js'

test('bubbleSort', () => {
  expect(bubbleSorting([])).toEqual([])
  expect(bubbleSorting([3, 10, 4, 3])).toEqual([3, 3, 4, 10])
  expect(bubbleSorting([0, 4, 0, 10, -3])).toEqual([-3, 0, 0, 4, 10])
})
