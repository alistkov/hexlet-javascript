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
