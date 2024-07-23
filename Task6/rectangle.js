import {Shape} from "./shape.js";

export class Rectangle extends Shape{
    static count=0;

    constructor(w,h,n){
    super(n);
    this.width=w;
    this.height=h;
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
