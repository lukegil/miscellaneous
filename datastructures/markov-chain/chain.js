"use strict";

const { createNode } = require("./node");

function createMarkovChain() {
  const words = {};

  return {
    getNextWord,
    addSentence,

    // for debugging
    getWord: (word) => words[word],
  };

  function getNextWord(word) {
    if (!words[word] || !words[word].getNext()) {
      const keys = Object.keys(words);
      const i = Math.floor(Math.random() * Math.floor(keys.length));
      return words[keys[i]];
    }
    return words[word].getNext().getName();
  }

  function addSentence(sentence) {
    sentence.forEach((word, index) => {
      words[word] = createNode(word);
      if (index - 1 >= 0) {
        words[sentence[index - 1]].addOrIncrement(words[word]);
      }
    });
  }
}

module.exports = {
  createMarkovChain,
};
