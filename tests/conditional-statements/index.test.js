import { describe, expect, test } from 'vitest';

import {
  isInternationalPhone,
  isLeapYear,
  isLongWord,
  isNotPalindrome,
  isPalindrome,
  isPensioner,
} from '../../src/conditional-statements';

describe('test exercises in conditional statements track', () => {
  test('bool type [isPensioner]', () => {
    expect(isPensioner(60)).toBeTruthy();
    expect(isPensioner(65)).toBeTruthy();
    expect(isPensioner(55)).toBeFalsy();
  });

  test('bool strings [isLongWord]', () => {
    expect(isLongWord('word')).toBeFalsy();
    expect(isLongWord('long owrd')).toBeTruthy();
  });

  test('combine expressions [isInternationalPhone]', () => {
    expect(isInternationalPhone('+381123456')).toBeTruthy();
    expect(isInternationalPhone('98213123123')).toBeFalsy();
  });

  test('logical operators [isLeapYear]', () => {
    expect(isLeapYear(2024)).toBeTruthy();
    expect(isLeapYear(2000)).toBeTruthy();
    expect(isLeapYear(1900)).toBeFalsy();
    expect(isLeapYear(2023)).toBeFalsy();
  });

  describe('logical negation', () => {
    test('[isPalindrome]', () => {
      expect(isPalindrome('level')).toBeTruthy();
      expect(isPalindrome('Wow')).toBeTruthy();
      expect(isPalindrome('palindrome')).toBeFalsy();
      expect(isPalindrome('ReGister')).toBeFalsy();
    });

    test('[isNotPalindrome]', () => {
      expect(isNotPalindrome('level')).toBeFalsy();
      expect(isNotPalindrome('Wow')).toBeFalsy();
      expect(isNotPalindrome('palindrome')).toBeTruthy();
      expect(isNotPalindrome('ReGister')).toBeTruthy();
    });
  });
});
