
export class Shape{
    constructor (name){
        if(this.constructor == Shape){
            throw "can't create objects from abstract class";
        }   
        this.nameOfShape = name;
    }

    calcArea (){}
    calcPerimeter(){}
    toString(){}
}