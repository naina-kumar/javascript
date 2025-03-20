//Synchronous--
//code runs in a particular sequence of instruction given the program.
console.log("naina");
console.log("one");
console.log("three");





//Asynchronous--
//it allows to execute next intructions immediately and does't follow the block

function fullName() {
    console.log("hello Naina");
    
}
setTimeout(fullName,2000)  //timeout; 2sec=2000ms

//--next method
setTimeout(()=>{
    console.log("hello Naina");
    
})