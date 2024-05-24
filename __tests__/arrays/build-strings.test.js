import { test, expect } from '@jest/globals';
import buildDefinitionList from '../../src/arrays/build-strings.js';

test(buildDefinitionList, () => {
  const definitions = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];

  const actual = buildDefinitionList(definitions);
  const expected =
    '<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>';
  expect(actual).toBe(expected);

  expect(buildDefinitionList([])).toEqual('');
});
