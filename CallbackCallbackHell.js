
//-----------callback:----------------
//a callback is a function passed as an argument to another function


//synchronousCallback--
function sum(a, b) {
    console.log(a+b);
    
}

function calculator(a,b , sumCallback){
    sumCallback(a,b)
}

calculator(1,2,sum);  //its shows next method in given below line

// calculator(1,2, (a,b)=>{
//     console.log(a+b);
    
// })



//AsynchronousCallback--
const hello=()=>{
    console.log("hii");
    
}
setTimeout(hello,2000);



//-----------callbackHell--------
//nested callbacks
let age=19;
if(age>=18){
  if(age>=60){
    console.log("senior");
    
  }else{
    console.log("middle");
    
  }

}else{
    console.log("child");
    
}