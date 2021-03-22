const SENTINEL_VAL = "sentinel";

function createLinkedList() {
  const sentinal = createNode(SENTINEL_VAL, null, null);
  sentinal.next = sentinal;
  sentinal.prev = sentinal;

  return {
    search,
    insert,
    deleteVal,
    deleteFirst,
    toArray,
    getHead,
    getTail,
  };

  function getHead() {
    if (sentinal.next !== sentinal) {
      return sentinal.next;
    }
    return null;
  }

  function getTail() {
    if (sentinal.prev !== sentinal) {
      return sentinal.prev
    }
    return null;
  }

  function toArray() {
    const array = [];
    let cur = sentinal.next;
    while (cur !== sentinal) {
      array.push(cur.val);
      cur = cur.next;
    }
    return array;
  }

  function search(val) {
    let cur = sentinal;
    while (cur.next !== sentinal) {
      cur = cur.next;
      if (cur.val === val) {
        return cur;
      }
    }
    return null;
  }

  function insert(val) {
    const newNode = createNode(val);

    newNode.next = sentinal.next;
    sentinal.next = newNode;
    newNode.prev = sentinal;
    newNode.next.prev = newNode;

    if (sentinal.prev === sentinal) {
      sentinal.prev = newNode;
    }
  }

  function deleteVal(val) {
    const toDelete = search(val);
    toDelete.prev.next = toDelete.next;
    toDelete.next.prev = toDelete.prev;
  }

  function deleteFirst() {
    const toDelete = sentinal.next;
    toDelete.prev.next = toDelete.next;
    toDelete.next.prev = toDelete.prev;
    return toDelete;
  }
}

function createNode(val, prev, next) {
  return {
    val,
    prev,
    next,
  };
}

module.exports = {
  createLinkedList,
};
