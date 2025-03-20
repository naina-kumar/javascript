//write an ES6 function that takes an array of numbers and return the first number that is divisible by 7 .
const numbers=[1,2,3,21,14,7];
const divisibleNumber=numbers.filter((Num)=>Num%7===0);
console.log(divisibleNumber[0]);

