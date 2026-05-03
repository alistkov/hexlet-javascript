export const addPrefix = (names, prefix) => {
  const result = [];

  for (let i = 0; i < names.length; i += 1) {
    result.push(`${prefix} ${names[i]}`);
  }

  return result;
};
