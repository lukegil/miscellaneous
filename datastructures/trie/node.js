"use strict";

function createTrieNode(letter) {
  let children = {};
  let endOfWord = false;
  let count = 0;
  return {
    addChild,
    getChildren: () => children,
    setIsEndOfWord: (isIt) => {
      endOfWord = isIt;
    },
    isEndOfWord: () => endOfWord,
    // The number of times this letter is the end of a word (i.e. how many times that word exists)
    incrementCount: () => {
      count++;
    },
    getCount: () => count,
    getLetter: () => letter,

    // for testing
    mergeChildren
  };

  function addChild(node) {
    const nodeLetter = node.getLetter();
    if (children[nodeLetter]) {
      children[nodeLetter] = mergeChildren(children[nodeLetter], node)
    } else {
      children[nodeLetter] = node;
    }
  }

  function mergeChildren(first, second) {
    first.setIsEndOfWord(first.isEndOfWord() || second.isEndOfWord());
    if (second.isEndOfWord()) {
      for (let i = 0; i < second.getCount(); i++) {
        first.incrementCount();
      }
    }
    return first;
  }
}

module.exports = {
  createTrieNode,
};
