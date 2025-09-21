import { expect, it } from 'vitest';
import { calculateDistance } from '../../src/data-abstraction/points.js';

it('calculate distance between 2 points', () => {
  expect(calculateDistance([0, 0], [3, 4])).toBe(5);
  expect(calculateDistance([-1, -4], [-1, -10])).toBe(6);
  expect(calculateDistance([1, 10], [1, 3])).toBe(7);
});
