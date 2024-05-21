import { expect, test } from '@jest/globals'
import getSameCount from '../../src/arrays/nested-loops.js'

test('nested loops', () => {
  expect(getSameCount([], [])).toBe(0)
  expect(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])).toBe(3)
  expect(getSameCount([1, 4, 4], [4, 8, 4])).toBe(1)
})
