import { test, expect } from '@jest/globals';

import average from '../../src/functions/rest-operator.js';

test('average', () => {
  expect(average()).toBeNull();
  expect(average(0)).toBe(0);
  expect(average(0, 10)).toBe(5);
  expect(average(-3, 4, 2, 10)).toBe(3.25);
});
