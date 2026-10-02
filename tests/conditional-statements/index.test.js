import { describe, expect, test } from 'vitest';

import { isPensioner } from '../../src/conditional-statements';

describe('test exercises in conditional statements track', () => {
  test('bool type [isPensioner]', () => {
    expect(isPensioner(60)).toBeTruthy();
    expect(isPensioner(65)).toBeTruthy();
    expect(isPensioner(55)).toBeFalsy();
  });
});
