import { describe, expect, it, test } from "vitest";
import { sum } from "./calculator";

test("return 0 if input is empty", () => {
  expect(sum("")).toBe(0);
});

test("return number 1 if input is string 1", () => {
  expect(sum("1")).toBe(1);
});

test("return 6 if input is string '1,5'", () => {
  expect(sum("1,5")).toBe(6);
});

test("return sum even-if new line is present in the input string", () => {
  expect(sum("1\n2,3")).toBe(6);
});

test("return sum for numbers more than 1 digit", () => {
  expect(sum("12,33")).toBe(45);
});

test("return sum even-if delimiter is present in the input string", () => {
  expect(sum("//;\n1;2")).toBe(3);
});

test("return error if negative number is detected", () => {
  expect(sum("1,22,-5")).toBe("negative numbers not allowed: -5");
});

test("return sum of '1,3 ,27\n 9 7;2//;\n1;23'", () => {
  expect(sum("1,3 ,27\n 9 7;2//;\n1;23")).toBe(73);
});

describe("UI Testing for main.js", () => {
  document.body.innerHTML = `<div id="app"></div>`;

  it("renders the correct content in #app", () => {
    const appDiv = document.getElementById("app");
    expect(appDiv.innerHTML).toBe("");
  });

  it("renders updated content when main.js changes it", async () => {
    await import("./main.js");

    const appDiv = document.getElementById("app");
    expect(appDiv.innerHTML);
  });
});
