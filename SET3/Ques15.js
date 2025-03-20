// Write an ES6 function that takes an array of numbers and returns the minimum number using
// the reduce function.
 const numbers = [10, 5, 8, 3, 6]
 const minNumber=numbers.reduce((acc,curr)=>{
    return Math.min(acc,curr)
 })
 console.log(minNumber);
 