class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    let first = new Stack();
    first.push(data);

    const node = first.pop();

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }

    //let stack = new Stack();

    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function size(list) {
  let count = 0;
  let cNode = list.top;
  while (cNode !== null) {
    cNode = cNode.next;
    count++;
  }

  return count;
}

function peek(list) {
  return list.top;
}
function isEmpty(list) {
  if (!list.top) {
    return true;
  }
  return false;
}
function display(list) {
  let thisNode = list.top;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== list.top) {
      output += " -> ";
    }
    output += `${thisNode.data}`;
    thisNode = thisNode.next;
  }
  return output;
}

function displayStr(list) {
  let thisNode = list.top;
  let output = "";
  while (thisNode !== null) {
    output += `${thisNode.data}`;
    thisNode = thisNode.next;
  }
  return output;
}

function displayQ(q) {
  let thisNode = q.first;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== q.top) {
      output += " -> ";
    }
    output += `${thisNode.data}`;
    thisNode = thisNode.next;
  }
  return output;
}

function main() {
  let test = new Queue();
  test.enqueue('data');
  test.enqueue('data2');
  test.enqueue('data3');
  console.log(displayQ(test));
  test.dequeue();
  console.log(displayQ(test));
}

main();
