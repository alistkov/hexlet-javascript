import { getX, getY } from './interface.js'

function makeSegment(point1, point2) {
  const segment = { beginPoint: point1, endPoint: point2 }
  return segment
}

const getBeginPoint = segment => segment.beginPoint

const getEndPoint = segment => segment.endPoint

function isParallelWithX(segment) {
  const beginPoint = getBeginPoint(segment)
  const endPoint = getEndPoint(segment)

  return getY(beginPoint) === getY(endPoint)
}

function isParallelWithY(segment) {
  const beginPoint = getBeginPoint(segment)
  const endPoint = getEndPoint(segment)

  return getX(beginPoint) === getX(endPoint)
}

export {
  isParallelWithX,
  isParallelWithY,
  makeSegment,
}
