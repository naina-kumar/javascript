//write a ES6 function that takes an array of objects representing products with properties name,price, and category
//return the first product object that is in the category "electronics".
const products=[
    {name: "Toothbrush", price: 29, category: "health"},
    {name: "Coffee Maker", price: 99, category: "home"},
    {name: "iPad", price: 799, category: "electronics"},
    {name: "Smartwatch", price: 199, category: "electronics"}
]
const electronicsProduct= products.find((F)=>F.category==="electronics");
console.log(electronicsProduct);

