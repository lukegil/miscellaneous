const { test, expect } = require("@jest/globals");
const { sumOfPrimesUpTo, sieveOfErosthenes } = require("./problem-10");

describe("Sum of all primes", () => {
  test("up to 10 is 17", () => {
    expect(sumOfPrimesUpTo(10)).toEqual(17);
  });

  test("up to 2000000 is 142913828922", () => {
    expect(sumOfPrimesUpTo(2000000)).toEqual(142913828922);
  });

  test("up to 10 is 17", () => {
    expect(sieveOfErosthenes(10)).toEqual(17);
  });

  test("up to 2000000 is 142913828922", () => {
    expect(sieveOfErosthenes(2000000)).toEqual(142913828922);
  });

});