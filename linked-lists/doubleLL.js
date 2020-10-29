class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, tempNode);
    }
  }
  insertBefore(item, previous) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== previous) {
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
      previousNode.next = new _Node(item, tempNode, previousNode);
    }
  }
  insertAfter(item, previous) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== previous) {
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
      tempNode.next = new _Node(item, previousNode.next.next, tempNode);

    }
  }
  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    } else if (position === 1) {
      this.insertFirst(item);
      return;
    } else {
      let tempNode = this.head;
      let positionCounter = 1;
      while (positionCounter < position - 1) {
        positionCounter++;
        tempNode = tempNode.next;
      }
      let num = tempNode.next;
      tempNode.next = new _Node(item, num, tempNode);
    }
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
    currNode.next.next.prev = currNode.prev;
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
}
function display(list) {
  let thisNode = list.head;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== list.head) {
      output += " <-> ";
    }
    output += `${thisNode.value}`;
    thisNode = thisNode.next;
  }
  return output;
}

function reverseList(list){

  let node = list.head;
  let temp = null;

  while (node !== null){
    temp = node.prev;
    node.prev = node.next;
    node.next = temp;
    node = node.prev;
  }
  if (temp !== null){
    list.head = temp.prev;
  }
  

}

function dllMain() {
  let DLL = new DoubleLinkedList();

  DLL.insertFirst("Aquaria");
  DLL.insertLast("Caprica");
  DLL.insertLast("Gemenon");
  DLL.insertLast("Picon");
  DLL.insertLast("Sagittaron");
  //DLL.insertAfter('Tauron', 'Picon')
  //DLL.remove('Picon')
  reverseList(DLL);
  console.log(display(DLL));
}

dllMain();
