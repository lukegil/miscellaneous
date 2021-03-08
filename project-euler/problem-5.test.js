const { test, expect } = require("@jest/globals");
const { smallestDivisible } = require("./problem-5");

describe("Divisibility", () => {
  test("What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 10?", () => {
    expect(smallestDivisible(10)).toEqual(2520);
  });

  test("What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?", () => {
    // iterations 221155228
    // iterations 23966688
    expect(smallestDivisible(20)).toEqual(232792560);
  });
});