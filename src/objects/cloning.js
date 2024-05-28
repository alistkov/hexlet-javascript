/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const cloneShallow = (collection) => {
  const result = {};

  for (const [key, value] of Object.entries(collection)) {
    result[key] = value;
  }
  return result;
};

export default cloneShallow;
