const { test, expect } = require("@jest/globals");
const { sumOfFactorials } = require("./problem-20");

describe("Sum of Factorial", () => {
  test("10! is 27", () => {
    expect(sumOfFactorials(10)).toEqual(27);
  });

  test("100! is 587", () => {
    expect(sumOfFactorials(100)).toEqual(587);
  });
});