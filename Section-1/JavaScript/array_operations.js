const arr1 = [5,8,2,1,6,4];
const arr2 =[];

for(let n of arr1){
    console.log(n*2);
}

console.log('--------------------------');

//Wap to print only odd numbers
//wap to print the square of each element in arr1

for(let n of arr1){
    arr2.push(n**2);
}
console.log(arr2);

console.log('--------------------------');

for(let n of arr1){
    if(n%2==!0){
        console.log(n);
    }
}

console.log('--------------------------');

