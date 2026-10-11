import { describe, expect, test } from 'vitest';

import {
  getLetter,
  guessNumber,
  isInternationalPhone,
  isLeapYear,
  isLongWord,
  isNotPalindrome,
  isPalindrome,
  isPensioner,
  normalizeUrl,
  getTrafficLightAction,
  flipFlop,
  getNumberExplanation,
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

  test('logical expressions [getLetter]', () => {
    expect(getLetter('word', 0)).toBe('');
    expect(getLetter('word', 2)).toBe('o');
    expect(getLetter('word', 10)).toBe('');
    expect(getLetter('word', -1)).toBe('');
  });

  test('if [guessNumber]', () => {
    expect(guessNumber(42)).toBe('You win!');
    expect(guessNumber(12)).toBe('Try again!');
  });

  test('if-else [normalizeUrl]', () => {
    expect(normalizeUrl('https://google.com')).toBe('https://google.com');
    expect(normalizeUrl('google.com')).toBe('https://google.com');
  });

  test('else-if [getTrafficLightAction]', () => {
    expect(getTrafficLightAction('green')).toBe('go');
    expect(getTrafficLightAction('yellow')).toBe('slow down');
    expect(getTrafficLightAction('red')).toBe('stop');
    expect(getTrafficLightAction('blue')).toBe('unknown');
  });

  test('ternary operator [flipFlop]', () => {
    expect(flipFlop('flip')).toBe('flop');
    expect(flipFlop('flop')).toBe('flip');
  });

  test('switch [getNumberExplanation]', () => {
    expect(getNumberExplanation(7)).toBe('prime number');
    expect(getNumberExplanation(42)).toBe('answer for everything');
    expect(getNumberExplanation(8)).toBe('just a number');
    expect(getNumberExplanation(666)).toBe('devil number');
  });
});
