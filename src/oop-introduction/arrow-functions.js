export function each(collection, cb) {
  return collection.map(item => cb.call(item))
}
