"use strict";

const { createTrie } = require("./trie");
const { createTrieNode } = require("./node");

describe("trie", () => {
  it("has correct shape", () => {
    expect(createTrie()).toEqual({
      addWord: expect.any(Function),
      getTopWords: expect.any(Function),
      getRootNode: expect.any(Function),
      findAllEndOfWords: expect.any(Function),
    });
  });
  describe("addWord", () => {
    it("can add a word", () => {
      const trie = createTrie();
      trie.addWord("word");
      const children = trie.getRootNode().getChildren();
      expect(children["w"]).toBeDefined();
    });
  });
  describe("getTopWords", () => {
    it("returns a word", () => {
      const trie = createTrie();
      trie.addWord("word");

      const actual = trie.getTopWords("w");
      const expected = [
        {
          word: "word",
          count: 1,
        },
      ];

      expect(actual).toEqual(expected);
    });

    it("returns words sorted by count", () => {
      const trie = createTrie();
      trie.addWord("word");
      trie.addWord("weird");
      trie.addWord("word");

      const actual = trie.getTopWords("w");
      const expected = [
        {
          word: "word",
          count: 2,
        },
        {
          word: "word",
          count: 1,
        },
      ];

      expect(actual).toEqual(expected);
    });

    it("works with multiple letters", () => {
      const trie = createTrie();
      trie.addWord("word");
      trie.addWord("weird");
      trie.addWord("word");

      const actual = trie.getTopWords("wo");
      const expected = [
        {
          word: "word",
          count: 2,
        },
      ];

      expect(actual).toEqual(expected);
    });
  });
  describe.only("findAllEndOfWords", () => {
    let trie;
    beforeEach(() => {
      trie = createTrie();
    });
    test("returns empty array if no children", () => {
      expect(trie.findAllEndOfWords(createTrieNode())).toEqual([]);
    });
    test("will include passed node if end of word", () => {
      const node = createTrieNode("a");
      node.setIsEndOfWord(true);
      node.incrementCount();

      expect(trie.findAllEndOfWords(node)).toEqual([{ word: "a", count: 1 }]);
    });
    test.only("works on one word", () => {
      const trie = createTrie();
      trie.addWord("abcd");

      const actual = trie.findAllEndOfWords(
        trie.getRootNode().getChildren()["a"]
      );
      expect(actual).toEqual([{ word: "abcd", count: 1 }]);
    });
  });
});
