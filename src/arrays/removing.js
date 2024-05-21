/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const isEven = (number) => number % 2 === 0

const getSameParity = (collection) => {
  if (collection.length === 0) {
    return []
  }
  const firstItemIsEven = isEven(collection.at(0))
  const result = []
  for (const number of collection) {
    if (firstItemIsEven === isEven(number)) {
      result.push(number)
    }
  }
  return result
}

export default getSameParity
