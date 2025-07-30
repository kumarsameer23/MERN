for(let i=0;i<10;i++){
    console.log(i);
}
a=10;
while(a<20){
    console.log(a);
    a++;
}
b=10;
do{
    console.log(b);
    b++;
}
while(b>20);

// wap to check if a number is perfect square
// wap to check if a number is prime

let c = 64;
let root = c**0.5;
console.log(root);

if(Number.isInteger(root)){
    console.log("Perfect Square");
}else{
    console.log("Not a perfect square");
}

//Prime
let d=12;
let isPrime = true;

 for(let i=2;i<d;i++){
    if(d % i === 0)
    console.log("not prime");
    isPrime = false;
    break;
 }

 if(isPrime){
     console.log("Prime");
 }

 //factorial
