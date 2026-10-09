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
