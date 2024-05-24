import { test, expect } from '@jest/globals';
import get from '../../src/arrays/isset.js';

test('isset', () => {
  const collection = [1, 2, 3, 4];

  expect(get([], 1)).toBeNull();
  expect(get(collection, 5, 'default')).toEqual('default');
  expect(get(collection, 0)).toBe(1);
  expect(get(collection, 1, 'default')).toBe(2);
  expect(get(collection, -1, 'default')).toBe('default');
});
