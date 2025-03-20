//wriyte an ES6 function that takes an array of objects containing student information(name,age, grade)
//return an array with only the students who have a grade above a certain value.
const students=[
    {name: "Alice" , age: 16, grade: 90},
    {name: "Bob" , age: 17, grade: 80},
    {name: "Charlie" , age: 15, grade: 95},
    {name: "David" , age: 16, grade: 85},
]
const gradeStudent=students.filter((g)=>g.grade>85)
console.log(gradeStudent);
