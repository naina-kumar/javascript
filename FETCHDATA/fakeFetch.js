const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/itemlist") {
                resolve({
                    status: 200, data: {
                        message: "Success", data: [
                            { itemName: "Bread", price: 30 },
                            { itemName: "Water Bottle", price: 50 },
                            { itemName: "Dairy Milk", price: 20 }
                        ]
                    }
                });
            } else {
                reject({
                    status: 404,
                    message: "Items list not found."
                });
            }
        }, 2000);
    });
}

fakeFetch("https://example.com/api/itemlistt").then((res) => {
    
    console.log(res.data.data);
    // document.getElementById("para").innerHTML=res.data.data.map((item)=>`${item.itemName} <br/>`)
    
    document.getElementById("para").innerHTML=`This is my data: ${res.data.data[1].itemName } ${res.data.data[1].price}`
})
.catch((res) => {
    console.log(res);
    
    const divtag = document.getElementsByClassName("put")[0]; // Access the first matching element
    if (divtag) {
        divtag.innerHTML = res.message; // Update the innerHTML with the error message
    } else {
        console.error("Element with class 'output' not found");
    }
});
