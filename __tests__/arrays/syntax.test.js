import { test, expect } from '@jest/globals'
import { getWeekends } from '../../src/arrays/syntax.js'

test('getWeekends', () => {
  expect(getWeekends()).toEqual(['saturday', 'sunday'])
  expect(getWeekends('long')).toEqual(['saturday', 'sunday'])
  expect(getWeekends('short')).toEqual(['sat', 'sun'])
})
