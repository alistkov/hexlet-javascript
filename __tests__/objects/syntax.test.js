import { test, expect } from '@jest/globals';
import getJsonFileData from '../../src/objects/syntax.js';

test('getJsonFileData', () => {
  expect(JSON.stringify(getJsonFileData())).toEqual(
    JSON.stringify({
      file: 'src/objects.js',
      config: true,
    })
  );
});
