import { describe, expect, test } from 'vitest';

import { multy, sub, sum } from '../src/math';

describe('test math operations', () => {
  test('sum', () => {
    expect(sum(2, 4)).toBe(6);
  });

  test('sub', () => {
    expect(sub(4, 1)).toBe(3);
  });

  test('multy', () => {
    expect(multy(3, 4)).toBe(12);
  });
});
