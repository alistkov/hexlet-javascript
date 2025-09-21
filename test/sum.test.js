import { expect, it } from 'vitest';
import { sum } from '../src/sum.js';

it('sum', () => {
  expect(sum(2, 3)).toBe(5);
});
