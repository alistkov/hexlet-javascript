/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */
const getTotalAmount = (money, currency) => {
  let sum = 0

  for (const value of money) {
    const cur = value.slice(0, 3)
    if (cur !== currency) {
      continue
    }
    const amount = Number(value.slice(4))
    sum += amount
  }
  return sum
}
export default getTotalAmount
