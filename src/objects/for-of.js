/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const pick = (data, keys) => {
  if (keys.length === 0) {
    return {};
  }

  const result = {};

  for (const [key, value] of Object.entries(data)) {
    if (keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

export default pick;
