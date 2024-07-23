let obj = {
    name :"basmala",
    age : "22",
    address: "cairo"
};

let handler ={
   get: function(target,prop,proxy){
    if(!(prop in target)){
        throw `this ${prop} is not found`;
    }
    return target[prop];
   },
   set: function(target,prop,value,proxy){
    if(!(prop in target)){
        throw `this ${prop} is not found`;
    }
    if(prop == "name"){
        if(!(typeof value == "string")){
            throw `type of ${prop} should be string`;
        }
        if(!(value.length == 7)){
            throw `${prop} length should be 7 chars`;
        }
    }
    if(prop == "address"){
        if(!(typeof value == "string")){
            throw `type of ${prop} should be string`;
        }
    }
    if(prop == "age"){
        if(!(typeof value == "number")){
            throw `type of ${prop} should be number`;
        }
        if(!(value<60 && value >25)){
            throw `${prop} length should be >25 and <60`;
        }
    }
    target[prop]=value;
   }

}


let proxy= new Proxy(obj ,handler);
console.log(proxy);

//test name
//proxy.name=99;
//proxy.name="kkkkkkkkkkkk";
proxy.name="basmala";

//test address
//proxy.address=55;
proxy.address="giza";

//test age
//proxy.age="kkkk";
//proxy.age=22;
//proxy.age=70;
proxy.age=27;


console.log({obj},{proxy});