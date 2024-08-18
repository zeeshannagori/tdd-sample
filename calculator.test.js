import { expect, test } from "vitest";
import { sum } from "./calculator";

test("return 0 if input is empty", () => {
  expect(sum("")).toBe(0);
});
