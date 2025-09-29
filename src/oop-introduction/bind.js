// export const bind = (obj, fn) => (...args) => fn.apply(obj, args)

export function bind(obj, fn) {
  return function (...args) {
    return fn.apply(obj, args)
  }
}
