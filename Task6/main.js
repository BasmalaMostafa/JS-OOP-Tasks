import {Rectangle} from "./rectangle.js";
import {Square} from "./square.js";
import {Circle} from "./circle.js";

let rec = new Rectangle(10,5,"Rectangle");

console.log(rec);
console.log(rec.toString());

let sq = new Square(5);

console.log(sq);
console.log(sq.toString());

let c = new Circle(5);

console.log(c);
console.log(c.toString());