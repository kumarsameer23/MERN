const myarr = [23, 'nice', false , undefined];
console.log(typeof myarr);
console.log(Array.isArray(myarr));
const movies = ['Avengers', 'Suryavansham', 'Ghayal', 'Mard','Sholey','Emoji'];

//Indexing
console.log(movies[2]);
console.log(movies.indexOf('Mard'));
console.log(movies.at(-2));

//Slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1));
console.log(movies.slice(1,40));
console.log(movies.slice(-4,-2));

//adding and removing element
movies.pop();//removes last element
movies.shift();//removes first element
console.log(movies);

movies.push('Bahubali'); //adds element at end
movies.unshift('MI'); // adds element at the beginning
console.log(movies);

// //inserting and replacing elements
// movies.splice(1,2);
// console.log(movies);

movies.splice(2,0,'Dangal','PK','3 Idiodts');
console.log(movies);
 

//Questions
const fruits = ['Apple','Banana','Cherry','Date','Berry','Mango','Orange'];
//1-add grapes to end of array
//2-Remove 'Banana' from array
//3-Replace 'Chery' with 'Pineapple' using splice
//4-Add 'Fig' and 'Kiwi' after 'Date' using splice
//5-Slice array to get three fruits after 'Banana'
//6-Remove element from array starting from index 2 to 5
//7-Add watermelon at index 6
//8-Slice the array to only contain the fruits at index 3 and fruit at postion 5
//9-log the element at index -5
//10-log the index of 'Mango' in the array
//11-log the fruit at the last index.(W/O using at() method or indexOf() method)
//12-remove the 2nd, 3rd, and the 4th elemnets from the array using splice. 
//13-Log the length of array after all operations
//14-Log index and position of 'Date','Banana','Orange' in the array


// //Solution 1
// fruits.push('Grapes');
// console.log(fruits);


// //Solution 2
// fruits.splice(1,1);
// console.log(fruits);

// //Solution 3
// fruits.splice(2,1,'Pineapple');
// console.log(fruits);

// //Solution 4
// fruits.splice(4,0,'Fig','Kiwi');
// console.log(fruits);

//Solution 5
// console.log(fruits.slice(2,5));

//solution 6
// fruits.splice(2,4);
// console.log(fruits);

//solution 7
// fruits.splice(6,0,'Watermelon');
// console.log(fruits);

//solution 8
// console.log(fruits.slice(3,5));

//solution 9
// console.log(fruits.at(-5));

//Solution 10
// console.log(fruits.indexOf('Mango'));

//Solution 11
// console.log(fruits.slice(6));

//solution 12
// fruits.splice(1,3);
// console.log(fruits);

//solution 13
// console.log(fruits.length);

//solution 14
console.log(fruits.indexOf('Date'));
console.log(fruits.indexOf('Banana'));
console.log(fruits.indexOf('Orange'));




