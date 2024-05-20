const addPrefix = (collection, prefix) => {
  const result = []
  for (let i = 0; i < collection.length; i += 1) {
    result[i] = `${prefix} ${collection[i]}`
  }
  return result
}

export default addPrefix
