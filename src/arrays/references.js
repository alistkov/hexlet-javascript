/* eslint-disable no-param-reassign, import/prefer-default-export */
export const reverse = (collection) => {
  const lastIndex = collection.length - 1
  for (let i = 0; i < lastIndex / 2; i += 1) {
    const mirrorIndex = lastIndex - i
    const tmp = collection[i]
    collection[i] = collection[mirrorIndex]
    collection[mirrorIndex] = tmp
  }
}
