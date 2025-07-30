const arr = [3,5,7,9,2,6];

const newArr = arr.map( (n) => {
    return n*2;
} );

console.log(newArr);

console.log('--------------------------');

const names = ['Avinash','Vishal','Farhan','Upendra','Sameer'];

const newNames = names.map((n) => {
    return 'Mr. ' +n
});
console.log(newNames);

console.log('--------------------------');

const upNames = names.map((n) => {
   return n.toUpperCase()
});
console.log(upNames);

const prices = [ '₹243.53','₹28.523','₹194.9','₹188.999' ];

//[243,28,194,188]
//reomve rupee
//convert in integer

// console.log(parseInt('₹243.53'.slice(1)));

const whole = prices.map((n) => {
   return (parseInt(n.slice(1)))
});
console.log('--------------------------'); 
console.log(whole);

console.log('--------------------------'); 

//Filter

const oddnums = arr.filter((a) => {
    return (a%2 ==! 0);
});

console.log(oddnums);
console.log('--------------------------'); 

const prices2 = [2300,1400,230,2000,3400,450,700];

const newPrices = prices2.filter((a) => {
    return (a>500 && a<2500);
});

console.log(newPrices);

console.log('--------------------------'); 

const friends = ['Raju','Pinki','Kaliya','Munni','Rinki'];

const nfriends = friends.filter((a) => {
    return a.length>=5;
});

console.log(nfriends);

console.log('--------------------------'); 

