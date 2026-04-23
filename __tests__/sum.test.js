import { expect, test } from "vitest";

import { sum } from "../src/sum.js";

test.for([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])("sum($a, $b) -> $expected", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
