/*
Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence
 */

function countSheep(num) {
  if (num <= 0) {
    console.log("All sheep jumped over the fence");
    return "lol";
  }
  let newNum = num - 1;
  console.log(`${num}: Another sheep jumps over the fence`);
  countSheep(newNum);
}

console.log(countSheep(3));

/* 
powerCalculator
*/

function powerCalculator(base, exp) {
  if (exp <= 0) {
    return `exponent should be a positive number sir!`;
  }
  if (exp > 1) {
    return base * powerCalculator(base, --exp);
  } else {
    return base;
  }
}

powerCalculator(10, 0);

//Reverse string

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
reverseString("hii");

// nth triangular number

function triangularN(num) {
  if (num === 1) {
    return 1;
  }
  return triangularN(num - 1) + num;
}

triangularN(5);

//fibannachi
function fiban(num) {
  if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return fiban(num - 1) + fiban(num - 2);
  }
}

// string splitter

// function stringSplitter(str, split){
//   let idxOf = str.indexOf(str)
//   if (str.includes(split) === false){
//     return str
//   }

// return [str.slice(0, str.indexOf(split))].concat(stringSplitter(str.slice(str.indexOf(split) + 1), split))

// }

function strSplit(str, char, results = []) {
  if (str.indexOf(char) === -1) {
    results.push(str);
    return results;
  }

  const charSpot = str.indexOf(char);
  const subStr = str.slice(0, charSpot);
  const remain = str.slice(charSpot + 1);
  results.push(subStr);
  //console.log(results)
  return strSplit(remain, char, results);
}

strSplit("02/02/2020", "/");

console.log(strSplit("02/20/2020", "/"));

fiban(6);

//factorial
function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

factorial(5);

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

// function mazeExit (maze, n, m, results){
// if (maze[n][m] === 'e'){
//  return results
// }
// if (maze[n][m + 1] == ' ' || maze[n][m +1] === 'e'){
//  results += 'r';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n, m + 1, results))
// } else if (maze[n + 1][m] == ' ' || maze[n + 1][m] === 'e'){
//  results += 'd';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n + 1, m, results))
// } else if (maze[n - 1][m] == ' ' || maze[n - 1][m] === 'e'){
//  results += 'u';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n - 1, m, results))
// } else if (maze[n][m - 1] == ' ' || maze[n][m - 1] === 'e'){
//  results += 'l';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n, m - 1, results))
// }

// }

// mazeExit(maze, 0,0, '')

function mazeExit(maze, n, m) {
  let currSpot = "-";

  maze[n][m] = currSpot;
  let path = "";
  switch (" ") {
    case maze[n][m + 1]:
      return (path += "R" + mazeExit(maze, n, m + 1));
      break;
    case maze[n][m - 1]:
      return (path += "L" + mazeExit(maze, n, m - 1));
      break;
    case maze[n + 1][m]:
      return (path += "D" + mazeExit(maze, n + 1, m));
      break;
    case maze[n - 1][m]:
      return (path += "U" + mazeExit(maze, n - 1, m));
      break;
  }
  switch ("e") {
    case maze[n][m + 1]:
      return (path += "R" + " Completed");
      break;
    case maze[n][m - 1]:
      return (path += "L" + " Completed");
      break;
    case maze[n + 1][m]:
      return (path += "D" + " Completed");
      break;
    case maze[n - 1][m]:
      return (path += "U" + " Completed");
      break;
    default:
      return "There are no more exits";
      break;
  }
}
mazeExit(maze, 0, 0);

// anagrams
function anagrams(str) {
  let results = [];
  function traverse(str, checked = "") {
    if (!str) {
      results.push(checked);
    }
    for (let i = 0; i < str.length; i++) {
      traverse(str.slice(0, i) + str.slice(i + 1), checked + str[i]);
    }
  }
  traverse(str);
  return results;
}
anagrams("east");


function findBinary(num, str =''){
  
  
  if (num === 0){
    return str.split("").reverse().join("") || 0
  } 
  
  str += num % 2
  let newNum = parseInt(num / 2)

  return findBinary(newNum, str)
 
}

findBinary(13)