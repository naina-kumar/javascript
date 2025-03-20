//write an ES6 function which greets them with a personalized message for onboarding.
const employeeData=[
    {name: "ram", dept: "marketer"},
    {name: "shyam", dept: "SDE"},
    {name: "mohan", dept: "Analyst"}
]
const employeeGreet=employeeData.map((Emp)=>`Hi ${Emp.name} we are glad to have you as a ${Emp.dept}`);
console.log(employeeGreet);
