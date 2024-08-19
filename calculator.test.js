import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import { sum } from "./calculator";

describe("Calculator function tests", () => {
  test("returns 0 if input is empty", () => {
    expect(sum("")).toBe(0);
  });

  test("returns number 1 if input is string '1'", () => {
    expect(sum("1")).toBe(1);
  });

  test("returns 6 if input is string '1,5'", () => {
    expect(sum("1,5")).toBe(6);
  });

  test("returns sum even if new line is present in the input string", () => {
    expect(sum("1\n2,3")).toBe(6);
  });

  test("returns sum for numbers with more than 1 digit", () => {
    expect(sum("12,33")).toBe(45);
  });

  test("returns sum even if delimiter is present in the input string", () => {
    expect(sum("//;\n1;2")).toBe(3);
  });

  test("throws an error if negative numbers are detected", () => {
    expect(() => sum("1,22,-5")).toThrow("negative numbers not allowed: -5");
  });

  test("returns sum for complex input with multiple delimiters", () => {
    expect(sum("1,3 ,27\n 9 7;2//;\n1;23")).toBe(73);
  });
});

describe("UI Testing for main.js", () => {
  document.body.innerHTML = `<div id="app"></div>`;

  it("renders the initial content correctly in #app", () => {
    const appDiv = document.getElementById("app");
    expect(appDiv.innerHTML).toBe("");
  });

  it("renders updated content correctly when main.js modifies it", async () => {
    await import("./main.js");

    const appDiv = document.getElementById("app");

    const form = appDiv.querySelector("form");
    expect(form).not.toBeNull();

    const input = form.querySelector("input[type='text']");
    expect(input).not.toBeNull();

    const button = form.querySelector("button");
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Add");

    const resultSpan = appDiv.querySelector("span");
    expect(resultSpan).not.toBeNull();
    expect(resultSpan.textContent).toBe("");
  });
});

describe("UI Testing of calculator form with dynamic user input", () => {
  document.body.innerHTML = `<div id="app"></div>`;

  beforeEach(async () => {
    await import("./main.js");
  });

  afterEach(() => {
    const appDiv = document.getElementById("app");
    const form = appDiv.querySelector("form");
    const input = form.querySelector("input[type='text']");
    const resultSpan = appDiv.querySelector("span");
    if (input) input.value = "";
    if (resultSpan) resultSpan.textContent = "";
  });

  it("updates the content correctly when user input is simulated", () => {
    const appDiv = document.getElementById("app");

    const form = appDiv.querySelector("form");
    expect(form).not.toBeNull();

    const input = form.querySelector("input[type='text']");
    expect(input).not.toBeNull();

    const button = form.querySelector("button");
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Add");

    const resultSpan = appDiv.querySelector("span");
    expect(resultSpan).not.toBeNull();
    expect(resultSpan.textContent).toBe("");

    input.value = "1,2,3";
    button.click();

    expect(resultSpan.textContent).toBe("Result: 6");
  });

  it("shows an error message for negative numbers", () => {
    const appDiv = document.getElementById("app");

    const form = appDiv.querySelector("form");
    expect(form).not.toBeNull();

    const input = form.querySelector("input[type='text']");
    expect(input).not.toBeNull();

    const button = form.querySelector("button");
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Add");

    const resultSpan = appDiv.querySelector("span");
    expect(resultSpan).not.toBeNull();
    expect(resultSpan.textContent).toBe("");

    input.value = "1,-2,3";
    button.click();

    expect(resultSpan.textContent).toBe("negative numbers not allowed: -2");
  });
});
