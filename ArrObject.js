
//Array of object 
const arr=[{"name":"naina","age":24},{"name":"sanu","age":24},{"name":"bhanu","age":24}]
arr.map((obj)=>console.log(`${obj.name}-${obj.age}`)
);

//array of object of object
let array=[{"data1":[{"name":"naina","age":24},{"name":"sanu","age":24},{"name":"bhanu","age":24}]},
{"data2":[{"name":"alexa","age":22},{"name":"john","age":24},{"name":"edwa","age":26}]}]
arr[1].data2.map((obj)=>console.log(`${obj.name}-${obj.age}`)
);

