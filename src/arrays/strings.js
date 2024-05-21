/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const makeCensored = (text, stopWords) => {
  const words = text.split(' ')
  const result = []

  for (const word of words) {
    const t = stopWords.includes(word) ? '$#%!' : word
    result.push(t)
  }
  return result.join(' ')
}

export default makeCensored
