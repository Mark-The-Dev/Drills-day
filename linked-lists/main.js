const LinkedList = require("./linkedList");

// Displays Linked List
function display(list) {
  let thisNode = list.head;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== list.head) {
      output += " -> ";
    }
    output += `${thisNode.value}`;
    thisNode = thisNode.next;
  }
  return output;
}
// returns size of linked list
function size(list) {
  let count = 0;
  let cNode = list.head;
  while (cNode !== null) {
    cNode = cNode.next;
    count++;
  }

  return count;
}
// shows if the linked list is empty or not
function isEmpty(list) {
  if (!list.head) {
    return "there are no items in this list!";
  } else {
    return "This list has items.";
  }
}

// finds the node before the item you are looking for
function findPrevious(list, item) {
  let currNode = list.head;
  let pNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode.value !== item) {
    if (currNode.next === null) {
      return null;
    } else {
      if (pNode.value === item) {
        // pNode = currNode.value;

        return pNode.value;
      } else {
        pNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  return pNode.value;
}
// returns last node in list
function findLast(list) {
  let tempNode = list.head;
  let node = list.head;
  while (node && node !== null) {
    tempNode = node;
    node = node.next;
  }
  return tempNode.value;
}

function reverseList(list) {
  let node = list.head;
  let track = list.head;
  let temp = null;

  while (node !== null){
    track = track.next;
    node.next = temp;
    temp = node;
    node = track;
  }

  list.head = temp;
}

function threeBehind(list){
  let total = size(list);
  total -= 3;
  let count = 1;
  let cNode = list.head;

  while(count !== total){
    cNode = cNode.next;
    count++;
  }
  return cNode.value;
}

function findMiddle(list){
  let total = size(list);
  if(total % 2 === 0){
    total = total /2;
  } else {
    total = (total / 2) + 0.5;
  }
  let node = list.head;
  let count = 1;

  while (count !== total){
    node = node.next;
    count++;
  }
  return node.value;
}

function findCycle(list){
  let slowMo = list.head;
  let fastMo = list.head;
  let check = true;

  while(check){
    slowMo = slowMo.next;

    if(fastMo.next !== null){
      fastMo = fastMo.next.next;
    } else {
      return false;
    }
    if(slowMo === null || fastMo === null){
      return false;
    }
    if(slowMo === fastMo){
      return true;
    }
  }


}

function main() {
  let SLL = new LinkedList();
  //console.log(SLL)
  //console.log(`// Q1:`)
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  //console.log(SLL);
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  //console.log(SLL.find('Boomer'));
  SLL.insertLast("Tauhida");
  //SLL.remove('squirrel')
  //SLL.inserAt("Kat", 1);
  SLL.remove("Tauhida");
  SLL.insertAfter("Jax", SLL.findByValue("Husker"));
  // print the single linked list
  console.log(`// Q3:`);
  console.log(display(SLL));
  reverseList(SLL);
  console.log(display(SLL));
  //console.log('Reverse here', reverseList(SLL));
  
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL));
  // console.log("Last node is:", findLast(SLL));
  // console.log(threeBehind(SLL));
  // console.log(findMiddle(SLL))
  // Q8
  //console.log(findCycle(SLL))
  
  //let BLL = new LinkedList();
 // BLL.insertFirst("Apollo");
 //BLL.insertLastBad("Boomer");
  //console.log(findCycle(BLL))
  
  //Q9


  

}

main();

/*
Q4:
Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

does: checks for dupes, removes dupes
complexity = O(n)
*/
