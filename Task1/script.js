
//task1
function Rectangle(w,h){
this.width=w;
this.height=h;
}

Rectangle.prototype.calcArea = function(){
let area=this.width*this.height;
return area;
}

Rectangle.prototype.calcPerimeter = function(){
    let perim=(this.width+this.height)*2;
    return perim;
}

Rectangle.prototype.displayInfo= function (){
    console.log("width : "+this.width+", height : "+this.height);
    console.log("area : "+this.calcArea()+", perimeter : "+this.calcPerimeter());

}

let rec = new Rectangle(10,5);
console.log(rec);
rec.displayInfo();



//task2
let user={
name: "Ali",
age: "10",
getSetGen:function(){
    for(let key in this){
        if(typeof(this[key]) !== "function"){
            let proprety=this[key];
                Object.defineProperty(this,key,{
                    get: function (){
                        return proprety;
                    },
                    set : function(value){
                        proprety=value;
                    },
                })
            
        }
    }
}
}

user.getSetGen();

const user1={
    name:"Basmala",
    age: "22"
};

user.getSetGen.call(user1);
console.log(user1);
