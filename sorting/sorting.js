// bubble sort AKA BAD SORT

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

//Merge sort - Divide ond conquer
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  console.log("steps here", array);
  return array;
}

//Quick Sort the most common!

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

/*
Q1

Given the following list of numbers 
21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

a) What is the resulting list that will be sorted after 3 recursive 
calls to mergesort?

answer: [1, 21, 26, 45]

b) What is the resulting list that will be sorted after 
16 recursive calls to mergesort?

answer: full array

c) What are the first 2 lists to be merged?

answer: 1, 21 or 1,21,26,45

d) Which two lists would be merged on the 7th merge?

answer: [1,2,9,21] and [26,28,29,45]


~~~~~~~~~~~~~~~~~~
Q2

1) Suppose you are debugging a quicksort implementation that is supposed to 
sort an array in ascending order. After the first partition step has been 
completed, the contents of the array is in the following order: 
3 9 1 14 17 24 22 20. Which of the following statements is correct about the 
partition step? Explain your answer.

3, 9, 1, 14, 17,  -20   24, 22

3, 9, 1, 14,  -17        22, 24

3, 9, 1  -14

The pivot could have been 17, but could not have been 14 -- could have been either

The pivot could have been either 14 or 17 -- true

Neither 14 nor 17 could have been the pivot -- false

The pivot could have been 14, but could not have been 17 -- false the pivot can be any number

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
show the resulting list after the second partitioning according to the 
quicksort algorithm.


10, 3, [9]  (12)   14, 17, 13, 15, [19]

3, 9, (10),  12       14, 13, 15, (13), 19


When using the last item on the list as a pivot
a)  3, 9, (10),  12       14, 13, 15, (13), 19
----

13, 10, 3, 9, 12, (14)   17, 15, 19, 16

10, 3, 9, 12 ,13   14    15, 16, 17, 19


When using the first item on the list as a pivot
a) 10, 3, 9, 12 ,13   14    15, 16, 17, 19





*/
//Q3
function qSort(arr, start = 0, end = arr.length) {
  //TODO: Make a Quick sort
  if (start >= end) {
    return arr;
  }

  const middle = partitions(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partitions(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
}

//Q4

function mSort(arr) {
  //TODO: Make a merge sort

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort(left);
  right = mSort(right);
  return merges(left, right, arr);
}

function merges(left, right, arr) {
  let lIdx = 0;
  let rIdx = 0;
  let oIdx = 0;

  while (lIdx < left.length && rIdx < right.length) {
    if (left[lIdx] < right[rIdx]) {
      arr[oIdx++] = left[lIdx++];
    } else {
      arr[oIdx++] = right[rIdx++];
    }
  }
  for (let i = lIdx; i < left.length; i++) {
    arr[oIdx++] = left[i];
  }
  for (let i = rIdx; i < right.length; i++) {
    arr[oIdx++] = right[i];
  }
  return arr;
}

// Q6

function bucketSort(arr) {

  let temp =[];

  for(let i=0; i< arr.length; i++){
    temp[arr[i]] = arr[i];
  }
  let result =[];
  for(let i= 0; i<temp.length; i++){
    if(temp[i] !== undefined){
      result.push(temp[i]);
    }
  }

  return result;

}


// Q7 
function sortInPlace(arr){



  for (let i=0; i< arr.length; i++){
    let d = Math.random();
    if(i < arr.length-1){
      if(d > 0.4){
        let temp = arr[i];
        arr.splice(i, 1, arr[i+1]);
        arr.splice(i+1, 1,temp);
      }

    }

  }
  return arr;
}
//Q8
function sortBooks(arr){

  return mSort(arr);
}

function main() {
  // console.log(qSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));
  //console.log(bucketSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));
  //console.log(bucketSort([89, 30, 25, 32, 72, 70, 51, 42, 25]));

  let array = [1,2,3,4];
  let books =[
    'zzack zest',
    'AAA sort skillss',
    'find it',
    'git push skills',
    'has it been sorted?',
    'take your time',
    'book1',
    'book2',
    'book3',
    'more books',
    'scholastic journeys',
    'this is getting old',
    'they call it spooky',
    'ajregoiqetjhotih',
    'hqthqt',
    'qaerhheh',
    'rtjq4j',
    'q46jq46j',
    'jq4j646j',
    'q46jq46j'
  ];
  // let spliced = array.splice(0,1,'tmp');
  // array.splice(0,1, 2);
  // array.splice(1,1,1)
  console.log(sortInPlace(array));
  console.log(sortBooks(books));
}

main();
