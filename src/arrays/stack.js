/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const openingSymbols = ['(', '[', '{', '<']
const closingSymbols = [')', ']', '}', '>']

const isBracketStructureBalanced = (brackets) => {
  const stack = []
  for (const bracket of brackets) {
    if (openingSymbols.includes(bracket)) {
      stack.push(bracket)
    } else {
      const last = stack.pop()
      const openingSymbolIndex = openingSymbols.indexOf(last)
      const closingSymbolIndex = closingSymbols.indexOf(bracket)
      if (openingSymbolIndex !== closingSymbolIndex) {
        return false
      }
    }
  }
  return stack.length === 0
}

export default isBracketStructureBalanced
