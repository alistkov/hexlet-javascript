import { expect, it } from 'vitest';
import { multiply, sub, sum } from '../src/sum.js';

it('sum', () => {
  expect(sum(2, 3)).toBe(5);
});

it('multiply', () => {
  expect(multiply(2, 2)).toBe(4);
});

it('sub', () => {
  expect(sub(2, 4)).toBe(-2);
});
