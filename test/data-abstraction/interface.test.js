import { expect, it } from 'vitest'

import { makePoint } from '../../src/data-abstraction/interface'
import { isParallelWithX, isParallelWithY, makeSegment } from '../../src/data-abstraction/segment'

it('segment', () => {
  const point1 = makePoint(3, 2)
  const point2 = makePoint(0, 0)
  const point3 = makePoint(3, -5)
  const point4 = makePoint(10, 2)
  const point5 = makePoint(3, 4)
  const point6 = makePoint(3, 8)
  expect(isParallelWithY(makeSegment(point1, point2))).toBe(false)
  expect(isParallelWithY(makeSegment(point1, point3))).toBe(true)
  expect(isParallelWithX(makeSegment(point1, point4))).toBe(true)
  expect(isParallelWithY(makeSegment(point5, point6))).toBe(true)
  expect(isParallelWithX(makeSegment(point2, point3))).toBe(false)
})
