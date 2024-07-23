let obj = {
    name :"basmala",
    age : "22",
    address: "cairo"
};

function* iterate(obj){
    let objKeys= Object.keys(obj);
for(var i=0;i<=objKeys.length;i++){
    if(i==objKeys.length){
        yield {value: [objKeys[i],obj[objKeys[i]]],done: true};
        break;
    }
    yield {value: [objKeys[i],obj[objKeys[i]]],done: false};
}
}

let iterator=iterate(obj);

for(let key of iterator){
    console.log(key);
}
