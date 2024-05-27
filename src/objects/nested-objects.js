/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const get = (data, keys) => {
  let result = data;
  for (const key of keys) {
    if (!Object.hasOwn(result, key)) {
      return null;
    }
    result = result[key];
  }
  return result;
};

export default get;
