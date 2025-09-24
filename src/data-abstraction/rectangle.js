import { getQuadrant, getX, getY, makeDecartPoint } from './points.js'

export function makeRectangle(point, width, height) {
  return {
    point,
    width,
    height,
  }
}

export function getStartPoint(rectangle) {
  return rectangle.point
}

export function getWidth(rectangle) {
  return rectangle.width
}

export function getHeight(rectangle) {
  return rectangle.height
}

export function containsOrigin(rectangle) {
  const startPoint = getStartPoint(rectangle)
  const startPointQuadrant = getQuadrant(startPoint)

  const thirdPoint = makeDecartPoint(getX(startPoint) + getWidth(rectangle), getY(startPoint) - getHeight(rectangle))
  const thirdPointQuadrant = getQuadrant(thirdPoint)

  return startPointQuadrant === 2 && thirdPointQuadrant === 4
}
