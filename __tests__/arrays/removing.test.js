import { test, expect } from '@jest/globals';
import getSameParity from '../../src/arrays/removing.js';

test('getSameParity', () => {
  expect(getSameParity([])).toEqual([]);
  expect(getSameParity([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  expect(getSameParity([2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
});
