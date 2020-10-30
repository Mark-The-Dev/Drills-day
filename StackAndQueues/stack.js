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
    return node.data;
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

let is_palindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let newStr = new Stack();

  for (let i = 0; i < s.length; i++) {
    newStr.push(s[i]);
  }

  let backwards = displayStr(newStr);

  if (backwards === s) {
    return true;
  }
  return false;
};

let matchParens = (s) => {
  let newStr = new Stack();

  let open = false;
  let close = false;
  let position = 0;
  let spot = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    newStr.push(s[i]);
  }
  let thisNode = newStr.top;
  while (thisNode !== null) {
    if (thisNode.data === "(") {
      open = true;
      spot = position;
    }
    if (thisNode.data === ")") {
      close = true;
      spot = position;
    }

    thisNode = thisNode.next;
    position++;
  }
  if (open === true && close === false) {
    return false + `! You are missing a closing paren at spot:${spot}`;
  } else if (open === false && close === true) {
    return false + `! You are missing a opening paren at spot:${spot}`;
  } else {
    return true + `! Good job, you know how to use parens! ;)`;
  }
};

let sortStack = (s) => {
  let stack = new Stack();
  let length = 0;
  let length2 = 0;
  let highest = 0;
  let lowest = null;
  let middle = 0;
  let middleTemp = 0;

  for (let i = 0; i < s.length; i++) {
    stack.push(Number(s[i]));
  }
  let thisNode = stack.top;

  while (thisNode !== null) {
    thisNode = thisNode.next;
    length++;
  }
  console.log(display(stack));
  thisNode = stack.top;
  let stack2 = new Stack();

  while (length > length2) {
    while (thisNode !== null) {
      if (thisNode.data >= highest) {
        highest = thisNode.data;
      }
      if (thisNode.data >= middleTemp && thisNode.data < highest) {
        middleTemp = thisNode.data;
      }
      if (lowest === null) {
        lowest = thisNode.data;
      }
      if (thisNode.data <= lowest) {
        lowest = thisNode.data;
      }
      thisNode = thisNode.next;
      length2++;
    }
  }
  stack2.push(highest);
  length2 = 1;
  length + 1;
  thisNode = stack.top;

  while (length > length2) {
    while (thisNode !== null) {
      if (length2 === 1) {
        stack2.push(middleTemp);
        middle = middleTemp;
        middleTemp = 0;
        length2++;
      }
      if (length2 === length - 1) {
        stack2.push(lowest);
        length2++;
      }
      if (length2 > 1 && length2 < length) {
        thisNode = thisNode.next;
      }
      length2++;
    }
  }

  // console.log(stack2)
  console.log(middleTemp);
  console.log(display(stack2));
};
//----**************
let sortStack2 = (s) => {
  let stack = s;
  let stack2 = [];

  while (stack.length) {
    const tmp = stack.pop();
    while (true) {
      if (!stack2.length || tmp >= stack2[stack2.length -1]){
        stack2.push(tmp);
        break;
      } else {
        stack.push((stack2.pop()));
      } 
    }
  }
  return stack2;
};
//---------------------
function main() {
  let starTreck = new Stack();
  starTreck.push("Kirk");
  starTreck.push("Spock");
  starTreck.push("McCoy");
  starTreck.push("Scotty");
  let Burg = new Stack();
  //console.log(peek(starTreck));
  //console.log(isEmpty(starTreck));
  //console.log(isEmpty(Burg));
  // console.log(display(starTreck));
  // starTreck.pop();
  // starTreck.pop();
  // console.log(display(starTreck));
  // Q3
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));
  // Q4
  // console.log(matchParens('Hi (there)'))
  // console.log(matchParens('Hi The(e'))
  // console.log(matchParens('Hi T)hee'))
  //Q5
  console.log(sortStack2([7, 2, 4, 3,3, 1, 9, 6]));
}

main();
