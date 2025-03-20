// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the
// squares of all the numbers in the array
 const numbers = [1, 2, 3, 4, 5]
 const sumSquare=numbers.reduce((acc,curr)=>acc+curr*curr,0)
 console.log(sumSquare);
 
 