/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return ''
  }

  const content = []
  for (const [name, description] of definitions) {
    content.push(`<dt>${name}</dt><dd>${description}</dd>`)
  }
  return `<dl>${content.join('')}</dl>`
}

export default buildDefinitionList
