import { getX, getY, makeDecartPoint } from './points.js'

export function makeSegment(beginPoint, endPoint) {
  return {
    beginPoint,
    endPoint,
  }
}

export function getBeginPoint(segment) {
  return segment.beginPoint
}

export function getEndPoint(segment) {
  return segment.endPoint
}

export function getMidpointOfSegment(segment) {
  const beginPoint = getBeginPoint(segment)
  const endPoint = getEndPoint(segment)

  const x = (getX(beginPoint) + getX(endPoint)) / 2
  const y = (getY(beginPoint) + getY(endPoint)) / 2

  return makeDecartPoint(x, y)
}

export function isParallelWithX(segment) {
  const beginPoint = getBeginPoint(segment)
  const endPoint = getEndPoint(segment)

  return getY(beginPoint) === getY(endPoint)
}

export function isParallelWithY(segment) {
  const beginPoint = getBeginPoint(segment)
  const endPoint = getEndPoint(segment)

  return getX(beginPoint) === getX(endPoint)
}
