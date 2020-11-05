const Queue = require('../StackAndQueues/queue');

// Linear search
// O(n)
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

//Binary search (Only works on sorted arrays)
// divide and conquer approach
//O(log(n))
function binarySearch(array, value, start, end) {
  var start =start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

//Depth first search
//O(n)
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }
  // Breadth-first search, access each row at a time in tree
  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
      }
    }

    return values;
  }
}

function deweySearch(dewey, title){

  let library =[
    {
      title: 'The story of Zorp',
      dewey: 200,
      aisle: 'Back Aisle'
    },
    {
      title: 'The story of Gorp',
      dewey: 200,
      aisle: 'Back Aisle'
    },
    {
      title: 'The story of Torp',
      dewey: 200,
      aisle: 'Back Aisle'
    },
    {
      title: 'The story of English',
      dewey: 800,
      aisle: 'Back Aisle'
    },
  ];

  for (let i =0; i< library.length; i++){
    if (library[i].title === title && library[i].dewey === dewey){
      return library[i];
    }
  }

  return `Not found!`;

}

function main(){
//Q1
  //binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8);
  // all, [3,5,6,8,11], [8,11]

  //binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16);
  //all, [12,14,15,17,18], [17,18], [17]

  // Q3
  console.log(deweySearch(200 , 'The story of Zorp'));


  //Q4
  /*
  1) Given a binary search tree whose in-order and pre-order traversals are 
  respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
  What would be its postorder traversal?

  2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
  What is its pre-order traversal?

  1] 25 15 14 19 27 89 79 91 90 35
  
  2] 5 6 7 8 9 10 11
  2b] 8 5 7 6 9 11 10
  */


}

main();