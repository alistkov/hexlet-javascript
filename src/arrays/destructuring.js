/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1
  const ys = y2 - y1

  return Math.sqrt(xs ** 2 + ys ** 2)
}

export const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null
  }

  let [nearestLocation] = locations
  const [, nearestPoints] = nearestLocation
  let lowerDistance = getDistance(nearestPoints, point)

  for (const location of locations) {
    const [, locationPoints] = location
    const locationDistance = getDistance(locationPoints, point)
    if (locationDistance < lowerDistance) {
      nearestLocation = location
      lowerDistance = locationDistance
    }
  }
  return nearestLocation
}
