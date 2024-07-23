//old
function Shape(name){
    if(this.constructor == Shape){
        throw "can't create objects from abstract class";
    }    
    this.nameOfShape =name;
}


Rectangle.counter=0;

function Rectangle(w,h,n){
    Shape.call(this,n);
    this.width=w;
    this.height=h;
    Rectangle.counter++;
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.toString = function(){
        return `width : ${this.width}, height : ${this.height}, area : ${this.calcArea()}, perimeter : ${this.calcPerimeter()}`;
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

    Rectangle.getCounter= function(){
        console.log(`num of instances : ${Rectangle.counter}`);
    }
    
    let rec = new Rectangle(10,5,"Rectangle");
    console.log(rec);
    console.log(rec.toString());

    let rec2 = new Rectangle(15,10,"Rectangle");

    Rectangle.getCounter();
    //rec.displayInfo();

    function Square(length){
        Rectangle.call(this,length,length,"Square");
    }

    Square.prototype = Object.create(Rectangle.prototype);
    Square.prototype.constructor = Square;

    let sq = new Square(5);
    console.log(sq);
    console.log(sq.toString());