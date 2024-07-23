var fruits =["apple","strawberry","banana","orange","mango"];
//point 1
// function check(){
//     let flag=true;
//     for(var i=0;i<fruits.length;i++){
//         if(typeof fruits[i] != "string"){
//             flag=false;
//             break;
//         }
//     }
//     if(flag){
//         return "all string";
//     }else{
//         return "not string";
//     }
// }

// console.log(check());

var res=fruits.every(function(elem){
return typeof elem == "string";
});

if(res){
console.log("all string");
}else{
    console.log("not string");
}

//point 2
// let flag=false;
// for(var i=0;i<fruits.length;i++){
//     if(fruits[i].charAt(0)=="a"){
//         flag=true;
//             break;
//     }
// }
// if(flag){
//     console.log("some starts with a");
// }else{
//     console.log("no elem starts with a");
// }

let res2 = fruits.some(function(elem){
return elem.charAt(0) =="a";
});

if(res2){
    console.log("some starts with a");
    }else{
        console.log("no elems starts with a");
    }
    

//point 3
var arr=fruits.filter(function(elem){
    for(var i=0;i<fruits.length;i++){
        if(elem.charAt(0) =="b" || elem.charAt(0) =="s"){
            return elem;
        }
    }
});

console.log(arr);

//point 4
var arr =fruits.map(function(elem){
return `i like ${elem}`;
});

arr.forEach(element => {
    console.log(element);
});

