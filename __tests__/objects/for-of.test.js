import { test, expect } from '@jest/globals';
import pick from '../../src/objects/for-of.js';

test('pick', () => {
  const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };

  expect(
    pick(
      {
        key: 'value',
        key2: 'value2',
      },
      []
    )
  ).toEqual({});

  expect(pick(data, ['user'])).toEqual({ user: 'ubuntu' });
  expect(pick(data, ['user', 'os'])).toEqual({ user: 'ubuntu', os: 'linux' });
  expect(pick(data, ['none', 'cores'])).toEqual({ cores: 4 });
});
