//Modern
class Shape{
    constructor (name){
        if(this.constructor == Shape){
            throw "can't create objects from abstract class";
        }   
        this.nameOfShape = name;
    }
}

let single = null;

class Rectangle extends Shape{
    static count=0;

    constructor(w,h,n){
    super(n);
    if(single != null && this.constructor == Rectangle){
        throw "u can create just one instance of Rectangle class !!"
    }

    single= this;

    this.width=w;
    this.height=h;
    Rectangle.count++;
    }

    static getCounter(){
        console.log(`num of instances : ${Rectangle.count}`);
    }

    calcArea (){
        let area=this.width*this.height;
        return area;
        }
        
    calcPerimeter(){
            let perim=(this.width+this.height)*2;
            return perim;
    }

    toString(){
        return `width : ${this.width}, height : ${this.height}, area : ${this.calcArea()}, perimeter : ${this.calcPerimeter()}`;
    }
}

let rec = new Rectangle(10,5,"Rectangle");

//let rec2 = new Rectangle(15,10,"Rectangle");

console.log(rec);
console.log(rec.toString());

Rectangle.getCounter();

let single2 = null;

class Square extends Rectangle{
    constructor(length){
        super(length,length,"Square");
        if(single2 != null  && this.constructor == Square){
            throw "u can create just one instance of Square class !!"
        }
    
        single2 = this;
    }

}

let sq = new Square(5);

//let sq2 = new Square(6);

console.log(sq);
console.log(sq.toString());