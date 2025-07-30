const arr1 = [ 2,4,7,9,12,47 ];

//1st method of traversing
for(let i=0;i<arr1.length;i++){
    console.log("Index=",arr1[i],"Position=",i);
}

console.log('--------------------------');

//2nd method for traversing
for(let n of arr1){
    console.log(n);
}

console.log('--------------------------');

arr1.forEach( (n, i,m) => {console.log(n,i,m);//pehla element doosra index print hoga
} );//callback function pass krta h apne aap

console.log('--------------------------');



