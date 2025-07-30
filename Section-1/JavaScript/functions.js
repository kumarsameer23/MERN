function addNums(a,b){
    var c=a+b;
    console.log(c);
}
addNums(20,25);
// console.log(c);
const avg = function(a,b,c){
    console.log(a,b,c);
    
    return (a+b+c)/3;    
}
const result = avg(30,20,10);
console.log(result);

//wap to print factorial

 const factorial = (n) => {
    let f = 1;
    for(let i=1;i<=n;i++){

        f = f*i;
    }
    return f;
 }
 const fact = factorial(3);
 console.log(fact);
 