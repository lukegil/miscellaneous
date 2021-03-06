"use strict";

const { createTrieNode } = require("./node");

function createTrie() {
  const rootNode = createTrieNode();

  return {
    addWord,
    getTopWords,
    getRootNode: () => rootNode,

    // for testing
    findAllEndOfWords,
  };

  function addWord(word) {
    const list = word.split("");
    list.reduce((prevNode, nextLetter, index) => {
      const node = createTrieNode(nextLetter);
      if (list.length - 1 === index) {
        node.setIsEndOfWord(true);
        node.incrementCount();
      }
      return prevNode.addChild(node);
    }, rootNode);
  }

  function getTopWords(seed) {
    const list = seed.split("");

    const root = list.reduce((node, letter) => {
      if (node && !node.getChildren()[letter]) {
        throw new Error(`Sub-word not present. Last letter was ${letter}`);
      }
      return node.getChildren()[letter];
    }, rootNode);

    const words = findAllEndOfWords(root);

    return words
      .sort((a, b) => a.count > b.count)
      .map((word) => {
        // have to slice off the first letter since it's already present at the end of the seed
        word.word = seed + word.word.slice(1, word.word.length);
        return word;
      });
  }

  function findAllEndOfWords(node) {
    let words = [];

    if (node.isEndOfWord()) {
      words.push(node.toObject());
    }

    if (Object.keys(node.getChildren()).length === 0) {
      return words;
    }

    let children = node.getChildren();
    return Object.keys(children).reduce((words, key) => {
      const cur = children[key];
      const prevList = findAllEndOfWords(cur);
      const combined = prevList.map(function (prev) {
        let a = node.getLetter();
        prev.word = a + prev.word;
        return prev;
      });
      return words.concat(combined);
    }, words);
  }
}

module.exports = { createTrie };
