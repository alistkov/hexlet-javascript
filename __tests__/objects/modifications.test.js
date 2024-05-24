import { test, expect } from '@jest/globals';
import normalize from '../../src/objects/modifications.js';

test('normalize data', () => {
  expect(
    normalize({
      name: 'ДеструКТУРИЗАЦИЯ',
      description: 'каК удивитЬ друзей',
    })
  ).toEqual({
    name: 'Деструктуризация',
    description: 'как удивить друзей',
  });

  expect(
    normalize({
      name: '',
      description: 'Some Description',
    })
  ).toEqual({
    name: '',
    description: 'some description',
  });
});
