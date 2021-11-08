let arr ={
    name : "Tanish",
    Date : "23jan"
}
for(let item in arr){ //iteration over key
    console.log(item);
}
for(let item of arr.name){ ///iteration over value
    console.log(item);
}