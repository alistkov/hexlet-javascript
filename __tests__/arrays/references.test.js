import { test, expect, describe } from '@jest/globals';
import { reverse } from '../../src/arrays/references.js';

describe('reverse', () => {
  test('empty collection reverse', () => {
    const collection = [];
    reverse(collection);
    expect(collection).toEqual([]);
  });

  test('reverse', () => {
    const collection = [1, 2, 3, 4];
    reverse(collection);
    expect(collection).toEqual([4, 3, 2, 1]);
  });
});
