export function truncate(text, length) {
  if (length > text.length) {
    return text;
  }

  if (length === 0) {
    return '';
  }

  return text.slice(0, length) + '...';
}

export function getHiddenCard(cardNumber, starsCount = 4) {
  return '*'.repeat(starsCount) + cardNumber.slice(-4);
}

/**
 * @param {string} text
 * @param {int} count
 * @returns {string}
 */
export function wordMultiply(text, count) {
  return text.repeat(count);
}

/**
 * @param {string} text
 * @returns {string}
 */
export const capitalize = (text) =>
  text.slice(0, 1).toUpperCase() + text.slice(1);
