"use strict";

function createNode(word) {
  const map = new Map();

  return {
    addOrIncrement: addOrIncrement,
    getName: () => word,
    getNext,

    // for debugging
    getMap: () => map,
  };

  function getNext() {
    // easiest way to just get a random of the exploded list
    const possibilities = [];
    for (const child of map.values()) {
      for (let i = 0; i < child.instances; i++) {
        possibilities.push(child.node);
      }
    }
    return possibilities[
      Math.floor(Math.random() * Math.floor(possibilities.length))
    ];
  }

  function addOrIncrement(node) {
    if (!map.has(node.getName())) {
      map.set(node.getName(), createChild(node));
    } else {
      map.get(node.getName()).instances += 1;
    }
  }

  function createChild(node) {
    return {
      node,
      instances: 1,
    };
  }
}

module.exports = {
  createNode,
};
