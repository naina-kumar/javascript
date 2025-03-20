//function that takes an array of object representing students with properties name and grade .
//return the first student object that has a grade of "B" and they are a also scholarships student .
const students=[
    {name: "Naina",grade: "B", scholarship: false},
    {name: "mary",grade: "C",scholarship: true},
    {name: "john",grade: "B",scholarship: true},
    {name: "alex",grade: "A",scholarship: true}
]
const filterStd=students.filter((std)=>std.grade==="B" & std.scholarship===true)
console.log(filterStd[0]);
