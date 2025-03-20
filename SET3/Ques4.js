//write an ES6 function that takes an array of object representing products with properties name, price and category.
//return all the products object that are in the category "electronics".
const products=[
    {name: "Toothbrush", price: 29, category: "health"},
    {name: "Coffee Maker", price: 99, category: "home"},
    {name: "iPad", price: 799, category: "electronics"},
    {name: "Smartwatch", price: 199, category: "electronics"}
]
const electronicsProduct=products.filter((elec)=>elec.category==="electronics");
console.log(electronicsProduct);
