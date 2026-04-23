import { test, expect } from "vitest";
import {getWeekends} from "../../src/arrays/syntax.js";

test("return weekend day", () => {
  expect(getWeekends()).toEqual(["saturday", "sunday"]);
  expect(getWeekends("long")).toEqual(["saturday", "sunday"]);
  expect(getWeekends("short")).toEqual(["sat", "sun"]);
});
