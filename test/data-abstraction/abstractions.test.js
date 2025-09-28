import { describe, expect, it } from 'vitest'

import { getBeginPoint, getEndPoint, getMidpointOfSegment, makeSegment } from '../../src/data-abstraction/abstractions.js'
import { makeDecartPoint } from '../../src/data-abstraction/points.js'

describe('segment', () => {
  it('get begin & end points', () => {
    const beginPoint = makeDecartPoint(3, 2)
    const endPoint = makeDecartPoint(0, 0)
    const segment = makeSegment(beginPoint, endPoint)
    expect(getBeginPoint(segment)).toEqual(beginPoint)
    expect(getEndPoint(segment)).toEqual(endPoint)
  })

  it('get midpoint of segment 1', () => {
    const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(0, 0))
    expect(getMidpointOfSegment(segment)).toEqual(makeDecartPoint(1.5, 1))
  })

  it('get midpoint of segment 2', () => {
    const segment2 = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(2, 3))
    expect(getMidpointOfSegment(segment2)).toEqual(makeDecartPoint(2.5, 2.5))
  })
})
