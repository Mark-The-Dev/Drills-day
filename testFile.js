// Algorithm Count elements in array

//my function takes an array as parameter
//input: Array of elements
//output: Integer representing elements
function countArray(arr){
  
  // if no array, returns the length of 0
  if (!arr[1]){
    return 1;
  }

  arr.pop();

  return 1 + countArray(arr);


}

console.log(countArray([1,7,6,9,3,6]))