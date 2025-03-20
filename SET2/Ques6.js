//write an ES6 function which filters out the products which have a price greater than 40.
const productData=[
    {prodName: "Dairy Milk",price: 10},
    {prodName: "Dairy Milk Silk",price: 70},
    {prodName: "Fice Star",price: 30},
    {prodName: "Mars",price: 50}
] 
const prodPrice=productData.filter((Price)=>Price.price>40);
console.log(prodPrice);
