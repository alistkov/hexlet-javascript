import { test, expect } from '@jest/globals';
import addPrefix from '../../src/arrays/for.js';

test('addPrefix', () => {
  const names = ['Smith', 'Doe', 'John'];

  expect(addPrefix(names, 'Mr.')).toEqual(['Mr. Smith', 'Mr. Doe', 'Mr. John']);
  expect(addPrefix(names, 'Mrs.')).toEqual([
    'Mrs. Smith',
    'Mrs. Doe',
    'Mrs. John',
  ]);
});
