const getIntersectionOfSortedArrays = (array1, array2) => {
  let firsIndex = 0
  let secondIndex = 0
  const result = []

  while (firsIndex < array1.length && secondIndex < array2.length) {
    const item1 = array1[firsIndex]
    const item2 = array2[secondIndex]
    const last = result.at(-1)
    if (item1 === item2 && item1 !== last) {
      result.push(item1)
      firsIndex += 1
      secondIndex += 1
    } else if (item1 > item2) {
      secondIndex += 1
    } else {
      firsIndex += 1
    }
  }
  return result
}

export default getIntersectionOfSortedArrays
