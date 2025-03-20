// Given an array, write an ES6 function that returns the total length of all the strings in an array.
 const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
 const stringLength=strings.reduce((acc,curr)=>acc+curr.length,0)
//  console.log(stringLength.length);
 console.log(stringLength);
 