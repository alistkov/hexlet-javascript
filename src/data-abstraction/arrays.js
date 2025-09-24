export function getMidpoint(point1, point2) {
  const midPointX = (point1.x + point2.x) / 2
  const midPointY = (point1.y + point2.y) / 2

  return {
    x: midPointX,
    y: midPointY,
  }
}
