//return only odd no of array
function oddNumber(arr){
    console.log(arr.filter((x)=>x%2!==0));
    
}
oddNumber([1,23,44,55,66,77,88]);


//return the sum of all digit present in  odd indices
function sumOfIndex(arr){
    console.log(arr.filter((x,index)=>index%2!==0).reduce((curr,acc)=>curr+acc));
    
}
sumOfIndex([1,2,3,5,6,7,7,6])


//return reverse string
let originalS="file";
let reverseString=originalS.split('').reverse().join('');
console.log(reverseString);



//return a shortest string in a array
const s=["primary","secondary","education","exam"];
const shortString=s.sort((a,b)=>a.length-b.length)[0];
console.log(shortString);

//---2nd method
function f(arr){
    console.log(arr.sort((a,b)=>a.length-b.length)[0]);
    
}
f(["math","phy","chemistry"]);




//two array in same length and return a sum of each corresponding element in two array in new  single array.
function newArr(arr1,arr2){
console.log(arr1.map((x,index)=>x+arr2[index]));

}
newArr([1,2,3],[2,1,2]);



//create a object with x an y properties and return an array containing the values of x and y.
function getValues(x,y){
return[x,y];

}
console.log(getValues(5,10));

//next method-
let myObj={
    x:5,
    y:10
};
let final=[myObj.x, myObj.y];
console.log(final);




//function take an obj represent a car and retun its make ,model, and year using disructuring of object--
let car={
    make: 'Toyota',
    model: 'corolla',
    year:   2015,
    color: 'gray',
}
function obj(car){
    let{make,model,year}=car;
  return `Make: ${make},Model:${model},Year:${year}`;  
}
console.log(obj(car));



//


