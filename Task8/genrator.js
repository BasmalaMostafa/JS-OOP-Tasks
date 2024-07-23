function* fib(n){
let fn=0;
let fn2=1;
let nextfn;

for(let i=1;i<=n;i++){
yield fn;
nextfn=fn+fn2;
fn=fn2;
fn2=nextfn;
}
}

function* fib2(n){
    let fn=0;
    let fn2=1;
    let nextfn;
    
    while(fn<=n){
    yield fn;
    nextfn=fn+fn2;
    fn=fn2;
    fn2=nextfn;
    }
    }

let gen=fib(6);
console.log("fiiiiiiiiiib1");
for(var i=0;i<=6;i++){
    console.log(gen.next());
}

let gen2=fib2(8);
console.log("fiiiiiiiiiib2");
for(var i=0;i<=7;i++){
    console.log(gen2.next());
}