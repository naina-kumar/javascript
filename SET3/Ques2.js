//write a ES6 function that takes an array of objects containing car information(make,model,year)
//  and return an array with only the cars that were made after the year 2012
const cars=[
    {make: "Toyota",model: "corolla", year: 2010},
    {make: "Honda",model: "civic", year: 2012},
    {make: "Toyota",model: "carmry", year: 2015},
    {make: "Ford",model: "mustang", year: 2018}
]
const toyotaCars=cars.filter((Tcar)=>Tcar.year>2012)
console.log(toyotaCars);

