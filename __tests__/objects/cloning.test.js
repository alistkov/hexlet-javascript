import { it, expect } from '@jest/globals';

import cloneShallow from '../../src/objects/cloning.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

it('shallowClone', () => {
  const clonedData = cloneShallow(data);
  expect(clonedData).toEqual(data);
  expect(clonedData).not.toBe(data);
});
