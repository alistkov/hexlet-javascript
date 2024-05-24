/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export const getMax = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  let [max, ...rest] = numbers;
  for (const number of rest) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
