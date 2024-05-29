/* eslint-disable no-param-reassign */
import { str } from 'crc-32';

const getIndex = (value) => Math.abs(str(value));

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

export const make = () => [];

export const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];
  return true;
};

export const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);

  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  return map[index][1];
};
