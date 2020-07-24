"use strict";

const { createNode } = require("./node");

describe("createNode", () => {
  test("creates a node with the correct methods", () => {
    expect(createNode("a")).toEqual({
      addOrIncrement: expect.any(Function),
      getName: expect.any(Function),
      getMap: expect.any(Function),
      getNext: expect.any(Function),
    });
  });
  describe("Node", () => {
    describe("addOrIncrement", () => {
      it("adds", () => {
        const child = createNode("a");

        const parent = createNode("b");
        parent.addOrIncrement(child);
        expect(parent.getMap().get("a")).toEqual({
          node: child,
          instances: 1,
        });
      });

      it("increments", () => {
        const child = createNode("a");

        const parent = createNode("b");
        parent.addOrIncrement(child);
        parent.addOrIncrement(child);
        expect(parent.getMap().get("a")).toEqual({
          node: child,
          instances: 2,
        });
      });
    });
    describe("getName", () => {
      test("gets it", () => {
        expect(createNode("a").getName()).toBe("a");
      });
    });
    describe("getNext", () => {
      test("returns the next key", () => {
        const node = createNode("a");
        const b = createNode("b");
        node.addOrIncrement(b);
        expect(node.getNext()).toEqual(b);
      });
    });
  });
});
