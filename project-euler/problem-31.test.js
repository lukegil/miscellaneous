const { test, expect } = require("@jest/globals");
const { findCombinations } = require("./problem-31");

describe("Coin combinations", () => {
  test("5", () => {
    expect(findCombinations(5)).toEqual(4);
  });

  test("10", () => {
    expect(findCombinations(10)).toEqual(11);
  });

  test("100", () => {
    expect(findCombinations(100)).toEqual(4563);
  });

  test("125", () => {
    expect(findCombinations(125)).toEqual(10564);
  });

  test("150", () => {
    expect(findCombinations(150)).toEqual(21873);
  });

  test("175", () => {
    expect(findCombinations(175)).toEqual(41454);
  });

  test.only("200", () => {
    expect(findCombinations(200)).toEqual(73682);
  });
});