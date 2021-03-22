const { test, expect } = require("@jest/globals");
const { quickSort } = require("./sort");

describe("QuickSort", () => {
  test("sort even length", () => {
    
    const input = [4, 3, 2, 1];

    const l = quickSort(input, 0, input.length - 1);

    expect(l).toEqual([1, 2, 3, 4])
  });

  test("sort odd length", () => {
    
    const input = [5, 4, 3, 2, 1];

    const l = quickSort(input, 0, input.length - 1);

    expect(l).toEqual([1, 2, 3, 4, 5])
  });

  test("sort equals", () => {
    
    const input = [5, 4, 3, 3, 3, 2, 1];
    const l = quickSort(input, 0, input.length - 1);

    expect(l).toEqual([1, 2, 3, 3, 3, 4, 5])    
  });

  test("random", () => {
    
    const input = [5, 4, 7, 1, 3, 2];
    const l = quickSort(input, 0, input.length - 1);

    expect(l).toEqual([1, 2, 3,  4, 5, 7])
  });

  test("sort incrementing", () => {
    
    const input = [1, 2, 3, 4];
    const l = quickSort(input, 0, input.length - 1);

    expect(l).toEqual([1, 2, 3, 4])
  });

  test.only("sort long", () => {
    const input = [];
    for (let i = 0; i < 100; i++) {
        input.push(Math.floor(Math.random() * 1000));
    }

    const l = quickSort(input, 0, input.length - 1);
    expect(l).toEqual([1, 2, 3, 4, 5])
  });
});