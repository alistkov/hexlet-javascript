/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const is = (data1, data2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (data1[key] !== data2[key]) {
      return false;
    }
  }
  return true;
};

export default is;
