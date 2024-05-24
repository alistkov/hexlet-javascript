const get = (collection, index, defaulValue = null) => {
  const lastIndex = collection.length - 1;
  if (index < 0 || index > lastIndex) {
    return defaulValue;
  }
  return collection[index];
};

export default get;
