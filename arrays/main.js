const array = require("./array");

/*
Q 1 - 4

const array =require('./array')

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  //1
  arr.push(3);

  console.log(arr);
  // 2
  arr.push(5);
  console.log(arr)
  arr.push(15);
  console.log(arr)
  arr.push(19);
  console.log(arr)
  arr.push(45);
  console.log(arr)
  arr.push(10);
  console.log(arr)
  // O(1) and o(n) length 6
  
  // 3
  arr.pop();
  console.log(arr)
  arr.pop();
  console.log(arr)
  arr.pop();
  console.log(arr)
  //O(n) length 3 at end

  // 4 
  console.log(arr[0])
  arr.pop()
  arr.pop()
  arr.pop()
  console.log(arr)
  arr.push("tauhida");
  console.log(arr[0])
  // added 1 new item to the array
  //Array resize is used for allocating new memory when needed.
}

main();

*/

// Q5
/*
Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een

url-ify
O(n)
*/

function urlFixer(str) {
  let newStr = "";
  let replace = "%20";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += replace;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

urlFixer("tauhida parveen");

//Q6 Filter array num less than 5
//Input: [1,2,3,8,9,4,0,12,11]
//complexity O(n)

function filterUnderFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filterUnderFive([1, 2, 3, 8, 9, 4, 0, 12, 11]);

// Q7 Max sum array

/*
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12
O(n)
*/

function maxSum(arr) {
  let sum = 0;
  let high = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > high) {
      high = sum;
    }
  }
  return high;
}

maxSum([4, 6, -3, 5, -2, 1]);

// Q8 Merge Arrays numeric
// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
//O(n)

function mergeArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  let sorted = newArr.sort((a, b) => {
    return a - b;
  });
  return sorted;
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// Q9

/*
Remove chars from string
Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/

function removeChars(str, chars) {
  let s = str;
  let newStr = "";
  let match = false;
  for (let i = 0; i < str.length; i++) {
    match = false;
    if (!match) {
      for (let j = 0; j < chars.length; j++) {
        if (s[i] === chars[j]) {
          match = true;
        }
      }
    }

    if (!match) {
      newStr += str[i];
    }
  }
  //console.log(newStr)
  return newStr;
}

removeChars("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");

// Q10

/*
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
*/

function products(arr) {
  let newTotal = 1;
  let newNum = 1;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newTotal *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newNum = newTotal / arr[i];
    newArr.push(newNum);
  }

  console.log(newArr);
}

products([1, 3, 9, 4]);

//Q11
/*
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
*/
function twoD(arr) {
  let nx = false;
  let nw = false;
  let ny = null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0 && !nx) {
        nx = true;
        /// ny = j;
        j = 0;
      }
      if (nx) {
        arr[i][j] = 0;
      }
    }
    nx = false;
  }

  //console.log(newArr)
  return newArr;
}
twoD([
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
]);

/*
Q12 str rotation
Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true
*/

function strRot(s1,s2){
  let text = s1
  for (let i =0; i < s1.length; i++){
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    if(text === s2){
      return true
    } 
  }

  return false
}

strRot('amazon', 'azonma')
strRot('amazon', 'azonam')