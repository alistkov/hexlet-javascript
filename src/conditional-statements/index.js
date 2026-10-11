export const isPensioner = (ages) => ages >= 60;

export const isLongWord = (word) => word.length > 5;

export const isInternationalPhone = (phone) => phone.startsWith('+');

export const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};

export const isPalindrome = (word) => {
  const formated = word.toLowerCase();
  return formated.split('').reverse().join('') === formated;
};

export const isNotPalindrome = (word) => !isPalindrome(word);

export const getLetter = (word, position) => word[position - 1] ?? '';

export const guessNumber = (guess) => (guess == 42 ? 'You win!' : 'Try again!');

export const normalizeUrl = (url) =>
  url.startsWith('https') ? url : `https://${url}`;

export const getTrafficLightAction = (color) => {
  if (color === 'green') return 'go';
  if (color === 'yellow') return 'slow down';
  if (color === 'red') return 'stop';
  return 'unknown';
};

export const flipFlop = (status) => (status === 'flip' ? 'flop' : 'flip');

export const getNumberExplanation = (number) => {
  switch (number) {
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    case 666:
      return 'devil number';
    default:
      return 'just a number';
  }
};
