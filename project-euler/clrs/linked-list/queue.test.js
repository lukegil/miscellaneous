const { test, expect } = require("@jest/globals");
const { createQueue } = require("./queue");

describe("Stack via LL", () => {
  test("can insert", () => {
    const l = createQueue();

    l.enqueue(1);
    l.enqueue(2);
    l.enqueue(3);

    expect(l.dequeue()).toBe(1);
    expect(l.dequeue()).toBe(2);
    expect(l.dequeue()).toBe(3);
  });
});
