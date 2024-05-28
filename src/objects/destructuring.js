/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSortedNames = (users) => {
  const result = [];

  for (const { name } of users) {
    result.push(name);
  }
  return result.sort();
};

export default getSortedNames;
