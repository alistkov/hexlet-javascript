import { describe, expect, it } from '@jest/globals';
import getSuperSeriesWinner from '../../src/arrays/nested-arrays.js';

describe('getSuperSeriesWinner', () => {
  it('canada', () => {
    const scores = [
      [3, 7],
      [4, 1],
      [4, 4],
      [3, 5],
      [4, 5],
      [3, 2],
      [4, 3],
      [6, 5],
    ];

    const result = getSuperSeriesWinner(scores);
    expect(result).toBe('canada');
  });

  it('ussr', () => {
    const scores = [
      [3, 3],
      [4, 1],
      [5, 8],
      [5, 5],
      [2, 3],
      [2, 5],
      [4, 4],
      [2, 3],
    ];

    const result = getSuperSeriesWinner(scores);
    expect(result).toBe('ussr');
  });

  it('draw', () => {
    const scores = [
      [3, 2],
      [4, 1],
      [5, 8],
      [5, 5],
      [2, 2],
      [2, 4],
      [4, 2],
      [2, 4],
    ];

    const result = getSuperSeriesWinner(scores);
    expect(result).toBeNull();
  });
});
