const { test, expect } = require("@jest/globals");
const { findPalindrome, isPalindrome } = require("./problem-4");

describe("Find the largest palindrome?", () => {
  test("The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.", () => {
    expect(findPalindrome(2)).toEqual(9009);
  });

  test("What about 3?", () => {
    expect(findPalindrome(3)).toEqual(906609);
  });

  test('isPalindrome', () => {
    expect(isPalindrome(1001)).toBeTruthy();
    expect(isPalindrome(10001)).toBeTruthy();
    expect(isPalindrome(10000001)).toBeTruthy();

  })
});