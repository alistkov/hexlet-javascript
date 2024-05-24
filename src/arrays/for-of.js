/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const calculateAverage = (collection) => {
  if (collection.length === 0) {
    return null;
  }

  let sum = 0;
  for (const item of collection) {
    sum += item;
  }
  return sum / collection.length;
};

export default calculateAverage;
