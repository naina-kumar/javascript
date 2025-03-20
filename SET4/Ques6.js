//. Write an ES6 function that takes an array of strings and returns the longest string.
 const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']
 const longString=strings.reduce((acc,curr)=>curr.length>acc.length ? curr:acc)
 console.log(longString);
 