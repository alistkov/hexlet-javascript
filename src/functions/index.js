export function truncate(text, length) {
  if (length > text.length) {
    return text;
  }

  if (length === 0) {
    return '';
  }

  return text.slice(0, length) + '...';
}
