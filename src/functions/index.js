/**
 * @param {string} text
 * @param {int} length
 * @returns {string}
 */
export const truncate = (text, length) => {
  if (length > text.length) {
    return text;
  }

  if (length === 0) {
    return '';
  }

  return text.slice(0, length) + '...';
};

/**
 * @param {string} cardNumber
 * @param {number} [starsCount=4]
 * @returns {string}
 */
export const getHiddenCard = (cardNumber, starsCount = 4) =>
  '*'.repeat(starsCount) + cardNumber.slice(-4);

/**
 * @param {string} text
 * @param {int} count
 * @returns {string}
 */
export const wordMultiply = (text, count) => text.repeat(count);

/**
 * @param {string} text
 * @returns {string}
 */
export const capitalize = (text) =>
  text.slice(0, 1).toUpperCase() + text.slice(1);
