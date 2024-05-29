import { test, expect } from '@jest/globals';
import sayPrimeOrNot from '../../src/functions/pure-functions.js';

test('sayPrimeOrNot', () => {
  expect(sayPrimeOrNot(0)).toBe('no');
  expect(sayPrimeOrNot(3)).toBe('yes');
  expect(sayPrimeOrNot(4)).toBe('no');
  expect(sayPrimeOrNot(5)).toBe('yes');
  expect(sayPrimeOrNot(6)).toBe('no');
});
