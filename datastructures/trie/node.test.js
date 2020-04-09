"use strict";

const { createTrieNode } = require("./node");

describe("node", () => {
  test("createTrieNode exists", () => {
    expect(createTrieNode).toBeDefined();
  });
  describe("TrieNode", () => {
    test("has the correct methods", () => {
      expect(createTrieNode()).toEqual({
        addChild: expect.any(Function),
        getChildren: expect.any(Function),
        setIsEndOfWord: expect.any(Function),
        isEndOfWord: expect.any(Function),
        incrementCount: expect.any(Function),
        getCount: expect.any(Function),
        getLetter: expect.any(Function),
        mergeChildren: expect.any(Function),
      });
    });

    describe("isEndOfWord", () => {
      test("works", () => {
        const node = createTrieNode();
        expect(node.isEndOfWord()).toBeFalsy();

        node.setIsEndOfWord(true);
        expect(node.isEndOfWord()).toBeTruthy();
      });
    });

    describe("count", () => {
      test("works", () => {
        const node = createTrieNode();
        expect(node.getCount()).toBe(0);

        node.incrementCount();
        expect(node.getCount()).toBe(1);

        node.incrementCount();
        expect(node.getCount()).toBe(2);
      });
    });

    describe("getLetter", () => {
      test("works", () => {
        expect(createTrieNode("A").getLetter()).toBe("A");
      });
    });

    describe("addOrIncrementChild", () => {
      test("adds new child", () => {
        const a = createTrieNode("a");
        const b = createTrieNode("b");
        b.addChild(a);
        expect(b.getChildren()[a.getLetter()]).toBe(a);
      });

      test("merges existing children", () => {
        const a1 = createTrieNode("a");
        const a2 = createTrieNode("a");
        const b = createTrieNode("b");
        b.addChild(a1);
        b.addChild(a2);

        const child = b.getChildren()[a1.getLetter()];
        expect(child.getCount()).toBe(0);
        expect(child.isEndOfWord()).toBeFalsy();
      });
    });

    describe("mergeChildren", () => {
      test("neither is end of word", () => {
        const parent = createTrieNode();
        const a = createTrieNode("a");
        const b = createTrieNode("b");
        const actual = parent.mergeChildren(a, b);
        expect(actual.isEndOfWord()).toBeFalsy();
        expect(actual.getCount()).toBe(0);
      });

      test("first is end of word", () => {
        const parent = createTrieNode();

        const a = createTrieNode("a");
        a.setIsEndOfWord(true);
        a.incrementCount();
        a.incrementCount();

        const b = createTrieNode("b");

        const actual = parent.mergeChildren(a, b);
        expect(actual.isEndOfWord()).toBeTruthy();
        expect(actual.getCount()).toBe(2);
      });

      test("second is end of word", () => {
        const parent = createTrieNode();

        const a = createTrieNode("b");

        const b = createTrieNode("a");
        b.setIsEndOfWord(true);
        b.incrementCount();
        b.incrementCount();

        const actual = parent.mergeChildren(a, b);
        expect(actual.isEndOfWord()).toBeTruthy();
        expect(actual.getCount()).toBe(2);
      });

      test("both are end of word", () => {
        const parent = createTrieNode();

        const a = createTrieNode("b");
        a.setIsEndOfWord(true);
        a.incrementCount();
        a.incrementCount();

        const b = createTrieNode("a");
        b.setIsEndOfWord(true);
        b.incrementCount();
        b.incrementCount();

        const actual = parent.mergeChildren(a, b);
        expect(actual.isEndOfWord()).toBeTruthy();
        expect(actual.getCount()).toBe(4);
      });
    });
  });
});
