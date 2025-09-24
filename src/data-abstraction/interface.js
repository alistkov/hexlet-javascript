export function makePoint(x, y) {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  }

  return point
}

export function getX(point) {
  const { angle, radius } = point
  return Math.round(radius * Math.cos(angle))
}

export function getY(point) {
  const { angle, radius } = point
  return Math.round(radius * Math.sin(angle))
}
