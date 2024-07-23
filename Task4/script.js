class Book{
    constructor(t,a,num,p,num2,num3){
        this.title=t;
        this.author=a;
        this.numOfChap=num;
        this.publisher=p;
        this.numOfPages=num2;
        this.numOfCop=num3;
    }
}

class Box{
 #numOfBooks =0;
 #content=[]

constructor(l,w,h,v,m){
    this.len=l;
    this.width=w;
    this.height=h;
    this.volume=v;
    this.material=m;
}

getContent(){
    return this.#content;
}

addBook(book){
this.#content.push(book);
this.#numOfBooks++;
}

deleteBook(name,type){
    for(var i=0;i<this.#numOfBooks;i++){
        if(this.#content[i].name==name || this.#content[i].type == type){
            this.#content.splice(i,1);
            this.#numOfBooks--;
            break;
        }
    }
    }

    toString(){
            console.log(`width of the box : ${this.width}, length : ${this.len}, height :${this.height}, volume: ${this.volume}`);
    }

    valueOf(){
        return this.#numOfBooks;
    }

}
let box1= new Box(100,200,300,400,"wood");

let b1= new Book("The Miracle Morning","Hal Elrod",10,"ay7aga",500,5);

box1.addBook(b1);

let b2= new Book("The Miracle Morning2","Hal Elrod",10,"ay7aga",500,5);

box1.addBook(b2);

let b3= new Book("The Miracle Morning3","Hal Elrod",10,"ay7aga",500,5);

box1.addBook(b3);

console.log(box1.getContent());

box1.deleteBook("The Miracle Morning");
console.log(box1.getContent());

console.log(box1.toString());

let box2= new Box(70,50,40,55,"glass");

let b4= new Book("The Miracle Morning4","Hal Elrod",10,"ay7aga",500,5);

box2.addBook(b4);

console.log(box1+box2);




