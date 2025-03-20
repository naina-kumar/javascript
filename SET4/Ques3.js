// Write an ES6 function that calculates and returns the total value of all items in an array of
// objects.
 const items = [
 { name: 'Item 1', price: 10 },
 { name: 'Item 2', price: 20 },
 { name: 'Item 3', price: 30 },
 ]
 const totalValue=items.reduce((acc,curr)=>acc+curr.price,0)
 console.log(totalValue);
 