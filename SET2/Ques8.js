//write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.
const names=["Mohan","Anjali","Geetanjali","Ankit","Bhanu kumar","Ramakrishanan"];
console.log(names.filter((nameString)=>nameString.length>8)[0]);
