// 3. Use this URL - https://example.com/login to make a fake fetch call and show the status like it is
//  authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or
//  Vanilla template in CodeSandbox for this question.
const fakeFetch=(url)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(url === "https://example.com/login"){
            resolve({
status: 200,
data: {
    auth: true
}
            });
        }
       else{
         reject({
            status: 404,
            message: "status not found"
         });
       }
    },2000);
});
};
 // your code here
fakeFetch("https://example.com/login").then((res)=>{
console.log(res.data.auth);
// if(res.data.auth===true){
//     console.log("verified");
    
// }else{
//     console.log("not varified");
    
// }
// document.getElementById("para").innerHTML=

})
.catch((err)=>{
    console.log(err);
    
})

 // Output on the DOM should be:
 // Verified