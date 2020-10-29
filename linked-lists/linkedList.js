class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertLastBad(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode);
    }
  }
  inserAt(item, position){
    if (this.head === null) {
      this.insertFirst(item);
      return;
    } else if (position === 1) {
      this.insertFirst(item);
      return;
    } else {
      let tempNode = this.head;
      let positionCounter = 1;
      while (positionCounter < position-1) {
        positionCounter++
        tempNode = tempNode.next;
      }
      let num = tempNode.next;
      tempNode.next = new _Node(item, num);
    }

  }
  insertBefore(item, prev) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== prev) {
        previousNode = previousNode.next;
        if (previousNode === null) {
          break;
        }
        tempNode = previousNode.next;
      }
      if (previousNode === null) {
        console.log("Item is not found");
        return;
      }
      previousNode.next = new _Node(item, tempNode);
    }
  }
  insertAfter(item, prev) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== prev) {
        previousNode = previousNode.next;
        if (previousNode === null) {
          break;
        }
        tempNode = previousNode.next;
      }
      if (previousNode === null) {
        console.log("Item is not found");
        return;
      }
      tempNode.next = new _Node(item, previousNode.next.next);
    }
  }
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  findByValue(value) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.next.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    previousNode.next = currNode.next;
  }
}


module.exports = LinkedList;