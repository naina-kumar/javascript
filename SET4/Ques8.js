//Write an ES6 function that takes an array of objects representing people with properties name
// and age, and returns an object with the average age of all the people.
 const people = [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
 { name: 'Charlie', age: 35 },
 { name: 'David', age: 40 },
 ]
 const averageAge=people.reduce((acc,curr)=>acc+curr.age,0)
 console.log(averageAge/people.length);
 