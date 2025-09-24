export function makeDecartPoint(x, y) {
  const point = { x, y }
  return point
}

export const getX = point => point.x

export const getY = point => point.y

export function calculateDistance(point1, point2) {
  const [x1, y1] = point1
  const [x2, y2] = point2

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
}
