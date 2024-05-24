import { test, expect } from '@jest/globals';
import { swap } from '../../src/arrays/modification.js';

test('swap', () => {
  expect(swap([])).toEqual([]);
  expect(swap([1, 2])).toEqual([2, 1]);
  expect(swap([1, 2, 3])).toEqual([3, 2, 1]);
});
