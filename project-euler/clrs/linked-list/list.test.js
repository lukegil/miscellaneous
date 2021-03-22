const { test, expect } = require("@jest/globals");
const { createLinkedList } = require("./list");

describe("Linked List", () => {
  test("can insert", () => {
    const l = createLinkedList();
    l.insert(1);
    l.insert(2);
    l.insert(3);

    expect(l.toArray()).toEqual([3, 2, 1])
  });

  test("can delete", () => {
    const l = createLinkedList();
    l.insert(1);
    l.insert(2);
    l.insert(3);

    l.deleteVal(2)

    expect(l.toArray()).toEqual([3, 1])
  });

  test("can search", () => {
    const l = createLinkedList();
    l.insert(1);
    l.insert(2);
    l.insert(3);


    expect(l.search(3).val).toEqual(3);
  });
});