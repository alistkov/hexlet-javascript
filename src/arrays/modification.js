/* eslint-disable no-param-reassign, prefer-destructuring, import/prefer-default-export */
export const swap = (collection) => {
  if (collection.length < 2) {
    return collection
  }

  const first = collection[0]
  collection[0] = collection.at(-1)
  collection[collection.length - 1] = first
  return collection
}
