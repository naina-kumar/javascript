// Write an ES6 function that takes an array of objects representing students with properties name
// and score, and returns the average score of all the students using the reduce function.
 const students = [
 { name: 'John', score: 80 },
 { name: 'Jane', score: 90 },
 { name: 'Bob', score: 75 },
 { name: 'Alice', score: 85 },
 ]
const totleScore=students.reduce((acc,curr)=>acc+curr.score,0)      
const averageScore=totleScore/students.length;
console.log(averageScore);
            
   
