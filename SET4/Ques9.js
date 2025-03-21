//. Write an ES6 function that takes an array of objects representing products with properties name,
// price, and quantity, and returns an object with the most expensive product.
 const products = [
 { name: 'Bread', price: 10, quantity: 2 },
 { name: 'Clips', price: 20, quantity: 5 },
 { name: 'Knife', price: 30, quantity: 1 },
 { name: 'Slipper', price: 40, quantity: 3 },
 ]
 const expensiveProduct=products.reduce((acc,curr)=>curr.price>acc.price?curr:acc)
 console.log(expensiveProduct);
 