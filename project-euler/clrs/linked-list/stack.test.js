const { test, expect } = require("@jest/globals");
const { createStack } = require("./stack");

describe("Stack via LL", () => {
  test("can insert", () => {
    const l = createStack();

    l.push(1);
    l.push(2);
    l.push(3);

    expect(l.pop()).toBe(3);
    expect(l.pop()).toBe(2);
    expect(l.pop()).toBe(1);
  });
});
