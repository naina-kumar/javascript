// Write an ES6 function that takes an array of numbers and returns the sum of all the even
// numbers in the array using the reduce function.
 const numbers = [12, 23, 4, 2, 11, 21]
 const sumEvenNo=numbers.reduce((acc,curr)=>{
    if(curr%2===0){
        return acc+curr;
    }
    return acc;
 },0);
 console.log(sumEvenNo);
 