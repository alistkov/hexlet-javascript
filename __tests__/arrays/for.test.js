import { test, expect } from "vitest";

import { addPrefix } from "../../src/arrays/for.js";

test("add prefix", () => {
  const names = [
    "john", "smith", "karl",
  ];

  expect(addPrefix(names, "mr")).toEqual([
    "mr john", "mr smith", "mr karl",
  ]);

  expect(addPrefix(names, "ms")).toEqual([
    "ms john", "ms smith", "ms karl",
  ]);
});
