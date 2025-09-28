import { expect, it } from 'vitest'
import { getMidpoint } from '../../src/data-abstraction/arrays.js'

it('get segment mid point 1', () => {
  const point1 = { x: 0, y: 0 }
  const point2 = { x: 4, y: 4 }
  expect(getMidpoint(point1, point2)).toEqual({ x: 2, y: 2 })
})

it('get segment mid point 2', () => {
  const point1 = { x: -1, y: 10 }
  const point2 = { x: 0, y: -3 }
  expect(getMidpoint(point1, point2)).toEqual({ x: -0.5, y: 3.5 })
})
