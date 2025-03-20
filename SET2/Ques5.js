//write an ES6 function which takes out the names of the students whose first letter starts with 'A'
const studentName=["Ram","Anjali","Arpit","bhanu","Ankit","shyam"];
const studentNameA=studentName.filter((sName)=>sName.startsWith("A"));
console.log(studentNameA);
