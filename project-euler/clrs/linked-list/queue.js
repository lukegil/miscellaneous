const { createLinkedList } = require("./list");

function createQueue() {
  const list = createLinkedList();
  return {
    enqueue,
    dequeue,
  };

  function enqueue(val) {
    list.insert(val);
  }

  function dequeue() {
    const last = list.getTail();
    const prev = last.prev;
    prev.next = last.next;
    prev.next.prev = prev;
    return last.val;
  }
}

module.exports = {
  createQueue,
};
