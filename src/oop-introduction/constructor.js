function getX() {
  return this.x
}

function getY() {
  return this.y
}

function getBeginPoint() {
  return this.beginPoint
}

function getEndPoint() {
  return this.endPoint
}

export function Point(x, y) {
  this.x = x
  this.y = y
  this.getX = getX
  this.getY = getY
}

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint
  this.endPoint = endPoint
  this.getBeginPoint = getBeginPoint
  this.getEndPoint = getEndPoint
}

export function reverse(segment) {
  const beginPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY())
  const endPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY())
  return new Segment(endPoint, beginPoint)
}
