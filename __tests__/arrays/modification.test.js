import { test, expect } from "vitest";

import { swap } from "../../src/arrays/modification.js";

test("swap first and last elements in array", () => {
  expect(swap([])).toEqual([]);
  expect(swap(["London"])).toEqual(["London"]);
  expect(swap(["London", "Berlin"])).toEqual(["Berlin", "London"]);
  expect(swap([
    "London", "Berlin", "Madrid", "Vienna",
  ])).toEqual([
    "Vienna", "Berlin", "Madrid", "London",
  ]);
});
