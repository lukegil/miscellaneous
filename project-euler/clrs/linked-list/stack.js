const { createLinkedList } = require("./list");

function createStack() {
  const list = createLinkedList();
  return {
    push,
    pop,
  };

  function push(val) {
    list.insert(val);
  }

  function pop() {
    return list.deleteFirst().val;
  }
}

module.exports = {
  createStack,
};
