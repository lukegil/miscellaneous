const { test, expect } = require("@jest/globals");
const { biggestPrimeFactor } = require("./problem-3");

describe("What is the largest prime factor of the number 600851475143 ?", () => {
  test("29 is largest prime factor for 13195", () => {
    expect(biggestPrimeFactor(13195)).toEqual(29);
  });

  test("6857 is largest prime factor for 600851475143", () => {
    expect(biggestPrimeFactor(600851475143)).toEqual(6857);
  });
});
