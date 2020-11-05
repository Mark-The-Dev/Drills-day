import React, { Component } from 'react';

import './App.css';


class App extends Component {
  state = { 
    nums: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
   }
  
  indexOf(array, value) {
    let steps = 0;
    for (let i = 0; i < array.length; i++) {
      steps++;
      if (array[i] == value) {
        
        return `found values: ${value} at slot: ${i} in ${steps} steps.`;
      }
    }
    return 'We did not find your result good sir.';
  }
  
  //Binary search (Only works on sorted arrays)
  // divide and conquer approach
  //O(log(n))
  
  
  
  render() { 
    let steps = 0;

    function binarySearch(array, value, start, end) {
      var start =start === undefined ? 0 : start;
      var end = end === undefined ? array.length : end;
    
      if (start > end) {
        return 'We did not find your result good sir!'
      }
      steps++
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


    let sorted = this.state.nums.sort((a,b)=> {
      return a-b;
    });


    
    return ( 
    <>
      <header><h1>This is a UI!</h1></header>
      <div>
        <p>Here is the Result</p>
        <p>Linear search</p>
      <p>{this.indexOf(this.state.nums, 3)}</p>
      <p>Binary search</p>
    <p>{binarySearch(sorted, 64) + ' Index'}</p>
    <p>{`in ${steps} steps`}</p>
      </div>
    </> );
  }
}
 
export default App;

