//write an ES6 function that takes an array of objects representing students with properties name and grade 
//return the first student object that has a grade of "A".
const students=[
    {name: "Naina",grade: "B"},
    {name: "mary",grade: "A"},
    {name: "john",grade: "C"},
    {name: "alex",grade: "A"}
]
const stName=students.filter((Stud)=>Stud.grade==="A");
console.log(stName);
