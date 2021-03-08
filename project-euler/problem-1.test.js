const { test, expect } = require("@jest/globals");
const { findSum } = require("./problem-1");

describe("Find the sum of all the multiples of 3 or 5 below 1000.", () => {
  test("< 10 is 23", () => {
    expect(findSum([3, 5])(10)).toEqual(23);
  });

  test("< 1000 is 23", () => {
    expect(findSum([3, 5])(1000)).toEqual(233168);
  });
});
