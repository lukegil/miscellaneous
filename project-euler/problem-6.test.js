const { test, expect } = require("@jest/globals");
const { getDiff } = require("./problem-6");

describe("Difference between Sum of Squares and Square of sums", () => {
  test("First 10 natural numbers is 2640", () => {
    expect(getDiff(10)).toEqual(2640);
  });

  test("First 100 natural numbers is 25164150", () => {
    expect(getDiff(100)).toEqual(25164150);
  });
});