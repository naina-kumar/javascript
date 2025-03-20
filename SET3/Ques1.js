//write an ES6 function that takes an  array of objects representing cars with properties make, model, and year .
//return the first car object that is a Toyota and the year is after 2010.
const cars=[
   {make: "Toyota",model: "corolla", year: 2010},
    {make: "Honda",model: "civic", year: 2012},
    {make: "Toyota",model: "carmry", year: 2015},
    {make: "Ford",model: "mustang", year: 2018},
]
const toyotaCar=cars.filter((x)=>x.make==='Toyota' && x.year>2010);
console.log(toyotaCar[0]);

