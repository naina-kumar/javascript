//Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a
// delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your
// browser console
function delayedAddition(a,b){
    setTimeout(() => {
    const sum=a+b;
    console.log(sum)
    }, 4000);

  
}
delayedAddition(2,3)
