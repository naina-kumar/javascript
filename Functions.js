//map function
const array=[1,2,3,4,5]
const array2=array.map((x)=>x+10)
console.log(array2);


//filter
const array3=array.filter((y)=>y%2===0)
console.log(array3);


//filter out only oddNumber:--
function filterOddFun(arr){
    console.log(arr.filter((x)=>x%2!==0));
    
}
filterOddFun([1,2,33,4,5,6,6,6,6,334,456,33])

//
function onlyOddIndex(arr){
console.log(arr.filter((y,index)=>index%2!==0));

}
onlyOddIndex([0,1,2,4,7,9,8,6,5]);


//reduce
const num=[1,2,3,4,5];
//sum or max

const sum=num.reduce((curr,acc)=>{
x=curr+acc;
return x;
},0);
console.log(sum);

//next example-add only odd  index using reduce-
function sumOfOddIndex(arr){
    console.log(arr.filter((x,index)=>index%2!==0).reduce((curr,acc)=>curr+acc)
);
    
}
sumOfOddIndex([2,1,3,5,6,7,8,8,9]);
