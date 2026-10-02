import { describe, expect, test } from 'vitest';

import { truncate } from '../../src/functions';

describe('test exercises in function track', () => {
  test('return lesson [truncate]', () => {
    expect(truncate('hello', 2)).toBe('he...');
    expect(truncate('hexlet', 0)).toBe('');
    expect(truncate('hexlet', 19)).toBe('hexlet');
  });
});
