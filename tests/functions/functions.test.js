import { describe, expect, test } from 'vitest';

import {
  truncate,
  getHiddenCard,
  wordMultiply,
  capitalize,
} from '../../src/functions';

describe('test exercises in function track', () => {
  test('return [truncate]', () => {
    expect(truncate('hello', 2)).toBe('he...');
    expect(truncate('hexlet', 0)).toBe('');
    expect(truncate('hexlet', 19)).toBe('hexlet');
  });

  test('default parameters [getHiddenCard]', () => {
    expect(getHiddenCard('1234567890123456')).toBe('****3456');
    expect(getHiddenCard('1234567890123456', 2)).toBe('**3456');
  });

  test('type annotations [wordMultiply]', () => {
    expect(wordMultiply('=', 4)).toBe('====');
    expect(wordMultiply('=', 0)).toBe('');
  });

  test('define short syntax [capitalize]', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
});
