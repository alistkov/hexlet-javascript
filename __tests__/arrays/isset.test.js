import { test, expect, describe } from "vitest";
import { get } from "../../src/arrays/isset.js";

describe("get item from array", () => {
  test("- by index", () => {
    const data = [
      1, 2, 3, 4, 5,
    ];
    expect(get(data, 0)).toBe(1);
    expect(get(data, 1, 20)).toBe(2);
  });

  test("- with default value", () => {
    const data = [
      1, 2, 3, 4, 5,
    ];

    expect(get(data, -1, "wrong")).toBe("wrong");
    expect(get(data, 10)).toBeNull();
    expect(get(data, 10, 20)).toBe(20);
  });
});
