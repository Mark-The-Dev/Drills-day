// Q1

/*
Problem:
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

--------------
Complextity:
Q1a) all = O(1)

Best: O(n)
Avg: O(n)
Worst: O(n)
------------------
*/

// Q2

/*
Problem:
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

--------------
Complextity:

Best: O(1)
Avg: O(1)
Worst: O(1)
---------------------
*/

// Q3

/*
Problem:
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

--------------------
Complextity:

Best: O(n)
Avg: O(n^2)
Worst: O(n^2)
------------------
*/

// Q4

/*
Problem:
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

--------------------
Complextity:

Best:O(1)
Avg: O(n)
Worst: O(n)
------------------
*/

// Q5

/*
Problem:
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

--------------------
Complextity:

Best: O(1)
Avg: O(n)
Worst: O(n)
------------------
*/

// Q6

/*
Problem:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

--------------------
Complextity:

Best: O(n)
Avg: O(n^2)
Worst: O(n^2)
------------------
*/
// Q7

/*
Problem:
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

--------------------
Complextity:

Best: O(1)
Avg: O(n)
Worst: O(n)
------------------
*/
// Q8

/*
Problem:
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

--------------------
Complextity:

Best: O(log(n))
Avg: O(log(n))
Worst: O(log(n))
------------------
*/
// Q9

/*
Problem:
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

--------------------
Complextity:

Best: O(1)
Avg: O(1)
Worst: O(1)
------------------
*/
// Q10

/*
Problem:
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

--------------------
Complextity:

Best:O(1)
Avg: O(n)
Worst: O(n)
------------------
*/

//Q11: Tower of Hanoi

/*
There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
*/
  
/*
let count = 0

function hanoi(discs, source, dest, aux) {
  
  if (discs == 1) {
    mover(source, dest);
    count++
  } else {
    hanoi(discs - 1, source, aux, dest);
    mover(source, dest);
    count ++
    hanoi(discs - 1, aux, dest, source);
    return dest + ` count is. . . ${count}`;
  }
}
function mover(startRod, targetRod) {
  console.log(`[${startRod}] [${targetRod}] has become. . .`)
  targetRod.push(startRod.pop());
  console.log(`[${startRod}] [${targetRod}]`)
}

console.log(hanoi(5, [1, 2, 3, 4, 5], [], []));

*/



const a = { name: "a", discs: [] };
const b = { name: "b", discs: [] };
const c = { name: "c", discs: [] };
function newHanoi(num) {
  let counter = 0;
  for (let i = 0; i < num; i++) {
    a.discs.push(num - i);
    console.log(a.discs, b.discs, c.discs);
  }
  const solver = (disc, source, dest, aux) => {
    if (disc === 1) {
      makeMove(source, dest);
    } else {
      solver(disc - 1, source, aux, dest);
      makeMove(source, dest);
      solver(disc - 1, aux, dest, source);
    }
  };
  const makeMove = (source, target) => {
    counter++;
    console.log(`I will now move from ${source.name} to ${target.name}`);
    target.discs.push(source.discs.pop());
    console.log("Number of moves:", counter);
  };
  solver(num, a, c, b);
}
newHanoi(5);
//Q12
//part 1

function countSheep(num) {
  str = "";
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      return str + `There are no more Sheep!`;
    } else {
      str += `${i}: Another sheep jumps over the fence\n`;
    }
  }
}

console.log(countSheep(3));

//part 2
function powerCalc(n1, n2) {
  let first = n1;
  let product = 0;
  if (n2 === 1) {
    return n1;
  }
  for (let i = 2; i <= n2; i++) {
    product = first * n1;
    first = product;
  }
  return product;
}

console.log(powerCalc(10, 5));
//part 3
function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("mike"));

//part 4
function triStar(num) {
  let newNum = 0;

  for (let i = 1; i <= num; i++) {
    newNum += i;
  }
  return newNum;
}

console.log(triStar(10));

//part 5

function strSplit(str, char) {
  let stringArray = [""];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      count++;
      stringArray.push("");
    } else {
      stringArray[count] += str.charAt(i);
    }
  }
  return stringArray;
}

console.log(strSplit("02/02/2020", "/"));

//part 6

function fib(num) {
  let track = 1;
  let val = 1;
  let total;
  if (num === 1) {
    return 0;
  }

  if (num === 2 || num === 3) {
    return 1;
  }

  //return fib(num - 1) + fib(num - 2) recurse replace
  for (let i = 4; i <= num; i++) {
    total = track + val;
    track = total;
    if (track > 2) {
      val = track - val;
    }
  }

  return total;
}

console.log(fib(6));

//part 7
function factorial(num) {
  let pastNums = [0, 1];
  let total = 0;
  if (num === 1) {
    return 1;
  }

  for (let i = 2; i <= num; i++) {
    total = i * pastNums[pastNums.length - 1];
    pastNums.push(total);
  }

  return total;
}

console.log(factorial(5));

//Q13
/*
1) O(n)
2) O(n)
3) O(n)
4) O(n)
5) O(n)
6) O(2^n)
7) O(n)
8) O(n)
10) O(n^3)
12) O(n)
*/

//Q14
/*
1) O(n)
2) O(n)
3) O(n)
4) O(n)
5) O(n)
6) O(n)
7) O(n)
*/
