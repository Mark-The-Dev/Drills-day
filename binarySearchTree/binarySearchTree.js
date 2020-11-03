class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
      /* If the existing node does not have a left child, 
           meaning that if the `left` pointer is empty, 
           then we can just instantiate and insert the new node 
           as the left child of that node, passing `this` as the parent */
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        /* If the node has an existing left child, 
           then we recursively call the `insert` method 
           so the node is added further down the tree */
        this.left.insert(key, value);
      }
    } else {
      /* Similarly, if the new key is greater than the node's key 
       then you do the same thing, but on the right-hand side */
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      /* If the item you are looking for is less than the root 
       then follow the left child.
       If there is an existing left child, 
       then recursively check its left and/or right child
       until you find the item */
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      /* If the item you are looking for is greater than the root 
       then follow the right child.
       If there is an existing right child, 
       then recursively check its left and/or right child
       until you find the item */
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error("Key Error");
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /* If the node only has a left child, 
           then you replace the node with its left child */
        this._replaceWith(this.left);
      } else if (this.right) {
        /* And similarly if the node only has a right child 
           then you replace it with its right child */
        this._replaceWith(this.right);
      } else {
        /* If the node has no children then
           simply remove it and any references to it 
           by calling "this._replaceWith(null)" */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function heightOfTree(b) {
  // let lPath= b.left;
  // let rPath= b.right;

  if (b === null) {
    return 0;
  }

  let lHeight = heightOfTree(b.left);
  let rHeight = heightOfTree(b.right);

  if (lHeight > rHeight) {
    return lHeight + 1;
  } else {
    return rHeight + 1;
  }
}

function isItSearch(b, firstNode) {
  let lPath = b.left;
  let rPath = b.right;

  while (lPath !== null) {
    if (firstNode < lPath.key || firstNode < lPath.key) {
      return false;
    }
    lPath = lPath.left;
  }

  while (rPath !== null) {
    if (firstNode > rPath.key || firstNode > rPath.key) {
      return false;
    }
    rPath = rPath.right;
  }
  return true;
}

function thirdLarge(b, arr = []) {
  if (b === null) {
    let sorted = arr.sort((a,b) => {
      return a-b;
    });
    
    return sorted[sorted.length - 3];
  }
  arr.push(b.key);

  let lHeight = thirdLarge(b.left, arr);
  let rHeight = thirdLarge(b.right, arr);

  if (lHeight > rHeight) {
    return lHeight; 
  } else {
    return rHeight;
  }

}

function isBalanced(b){
  
  let lh = heightOfTree(b.left);
  let rh = heightOfTree(b.right);


  if(lh > rh){
    if(rh + 1 !== lh){
      return false;
    } 
  }

  if (rh > lh){
    if(lh + 1 !== rh){
      return false;
    } 
  }

  return true;


}




// function displayKey(b) {
//   let key = b;
//   let leftStr ='Left Path:';
//   let rightStr = 'Right Path:';

//   while (key !== null) {
//     leftStr += ` (${key.key}) `;
//     key = key.left;
//   }
//   //console.log(leftStr);

//   key = b;
//   while (key !== null) {
//     rightStr += ` (${key.key}) `;
//     key = key.right;
//   }
//   //console.log(rightStr);
//   return [leftStr, rightStr];
// }


function isSame(arr1, arr2){

  if(arr1.length !== arr2.length || arr1[0] !== arr2[0]){
    return false;
  }

  let highArr1 = [];
  let highArr2 = [];
  let lowArr1 = [];
  let lowArr2 = [];


  for(let i=1; i< arr1.length; i++){
    if(arr1[i] > arr1[0]){
      highArr1.push(arr1[i]);
    } else {
      lowArr1.push(arr1[i]);
    }

    if (arr2[i] > arr2[0]){
      highArr2.push(arr2[i]);
    } else{
      lowArr2.push(arr2[i]);
    }

  }

  if(highArr1[0] === highArr2[0] && lowArr1[0] === lowArr2[0] && (highArr1[highArr1.length - 1]) + (highArr1[highArr1.length - 2]) === (highArr2[highArr2.length - 1]) + (highArr2[highArr2.length - 2]) && (lowArr1[lowArr1.length - 1]) + (lowArr1[lowArr1.length - 2]) === (lowArr2[lowArr2.length - 1]) + (lowArr2[lowArr2.length - 2])){
    return true;
  } else {
    return false;
  }


  // console.log(highArr1);
  // console.log(highArr2);
  // console.log(lowArr1);
  // console.log(lowArr2);

}

function main() {
  //Q3
  let BST = new BinarySearchTree();

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  console.log(BST);
  //Q5

  console.log(heightOfTree(BST));

  //Q6
  console.log(isItSearch(BST, 3));

  //Q7
  //console.log(thirdLarge(BST));
  //console.log(thirdLarge(BST));

  //Q8

  console.log(isBalanced(BST));

  // Q9
  //console.log(isSame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));

  // let BSTE = new BinarySearchTree();
  // BSTE.insert("E");
  // BSTE.insert("A");
  // BSTE.insert("S");
  // BSTE.insert("Y");
  // BSTE.insert("Q");
  // BSTE.insert("U");
  // BSTE.insert("E");
  // BSTE.insert("S");
  // BSTE.insert("T");
  // BSTE.insert("I");
  // BSTE.insert("O");
  // BSTE.insert("N");
  // console.log(BSTE);
}

//Q4

/*
Whats this do?
returns the total value of the tree.
complexity: O(2^n)
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

*/

//Q5

main();
