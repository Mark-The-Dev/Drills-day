//Q5

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

function sortLL(list){
  let newArr =[];

  let node= list.head;
  while(node !== null){
    newArr.push(node.value);
    node = node.next;
  }
  let sorted =qSort(newArr);
  let newList = new LinkedList();

  for(let i=0; i< sorted.length; i++){
    newList.insertLast(sorted[i]);
  }
  list = newList;

  return display(list);

}
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function qSort(arr, start=0, end = arr.length){
  //TODO: Make a Quick sort
  if(start >= end){
    return arr;
  }

  const middle = partitions(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partitions(arr, start, end){
  const pivot = arr[end -1];
  let j = start;
  for (let i =start; i < end -1; i++){
    if(arr[i] <= pivot){
      swap(arr, i, j);
      j++;
    }

  }
  swap(arr, end-1, j);
  return j;
}

function main(){

  let sll = new LinkedList();

  sll.insertFirst(7);
  sll.insertLast(5);
  sll.insertLast(12);
  sll.insertLast(6);
  sll.insertLast(4);
  sll.insertLast(97);
  sll.insertLast(52);
  sll.insertLast(21);
  sll.insertLast(13);
  sll.insertLast(10);
  sll.insertLast(35);
  sll.insertLast(17);
  console.log(display(sll));
  console.log(sortLL(sll));

}

main();