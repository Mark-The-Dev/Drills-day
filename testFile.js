// Algorithm Count elements in array

//my function takes an array as parameter
//input: Array of elements
//output: Integer representing elements
function countArray(arr) {
  // if no array, returns the length of 0
  if (!arr[1]) {
    return 1;
  }

  arr.pop();

  return 1 + countArray(arr);
}

//console.log(countArray([1,7,6,9,3,6]))

//Substring Function
/*
find the longest subStr that does not contain a repeating char'
input: 'rodrigo'
output: 'odrig' || 'drigo'

*/

function subFinder(str, length=0, subStr) {
  let count = 1;
  let sub = str[0];
  let first = str[0];
  
  if(!str.length){
    return `${subStr} at a length of:${length}`;
  }

  
  //repeat all chars at 0 index until repeat letter
  //let currLetter = str[0];
  for (let i = 1; i < str.length; i++) {
    
    if(str[i] !== first){
      count++;
      sub += str[i];
      
    } else{
      break;
    }
    if(count > length){
      length = count;
      subStr = sub;
    } 
  }

  return subFinder(str.substring(1), length, subStr );
  // store the amount of chars
  //repeat at next spot and only store the count if greater
}

//let string = "abcdefg";

console.log(subFinder('riddle'))
