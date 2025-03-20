//write an ES6 function that takes an array of objects representing students with properties name,grade and scholarship
//return the first student object that has grade of "A " or they are a scholarship student.
const students=[
    {name: "Naina",grade: "B", scholarship: false},
    {name: "mary",grade: "A",scholarship: true},
    {name: "john",grade: "C",scholarship: false},
    {name: "alex",grade: "A",scholarship: true}
]
 const filterStd=students.filter((selectStud)=>selectStud.grade==="A" & selectStud.scholarship===true)
 console.log(filterStd[0]);
 