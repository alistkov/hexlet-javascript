/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export const flatten = (collection) => {
  let result = []
  for (const item of collection) {
    if (Array.isArray(item)) {
      result = [...result, ...item]
    } else {
      result = [...result, item]
    }
  }
  return result
}
