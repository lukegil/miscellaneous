const { test, expect } = require("@jest/globals");
const { fibSumNaive } = require("./problem-2");

describe("By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.", () => {
  test("<= 89 is 44", () => {
    expect(fibSumNaive(2, 89)).toEqual(44);
  });

  test("<= 4000000 is 4613732", () => {
    expect(fibSumNaive(2, 4000000)).toEqual(4613732);
  });
});
