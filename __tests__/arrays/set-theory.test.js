import { test, expect } from '@jest/globals'
import countUniqChars from '../../src/arrays/set-theory.js'

test('countUniqChars', () => {
  expect(countUniqChars('')).toEqual(0)
  expect(countUniqChars('You know nothing Jon Snow')).toEqual(13)
  expect(countUniqChars('Fear cuts deeper than swords.')).toEqual(16)
})
