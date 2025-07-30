const user = {
    name : 'Lestrade',
    email : 'lestrade@email.com',
    password : 'abc1234',
    age : 23
};

console.log(user);//user.name user.age user.email etc
console.log(user['email']);//2nd way but not easy


user.address = '31st wall street';//adding key with data 

console.log(user.address);

user.password = 'xyz789';//updating the elements of existing key

console.log(user.password);

console.log(Object.keys(user));//accessing keys with Object keyword all at once
console.log(Object.values(user));//Accessing values with Object keyword all at once

const smartphone = {
   brand : 'Samsung',
   model : 'Galaxy S24',
   price : 89000,
   colors : ['black','white','silver']
};

//Syntax to access smartphone price
//Syntax to access 2nd smartphone colors

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push('blue');//adding new element
console.log(smartphone.colors);


const smartphoneList =[{
   brand : 'Samsung',
   model : 'Galaxy S24',
   price : 89000,
   colors : ['black','white','silver']
},
{
   brand : 'Apple',
   model : 'iPhone 16',
   price : 105000,
   colors : ['black','white','silver']
},
{
   brand : 'OnePlus',
   model : 'OnePlus 13',
   price : 60000,
   colors : ['black','white','silver']
},
{
   brand : 'Google',
   model : 'Pixel 8',
   price : 56000,
   colors : ['black','white','silver']
},
{
   brand : 'Xiaomi',
   model : '14 Ultra',
   price : 66000,
   colors : ['black','white','silver']
},]
console.log(smartphoneList.length);//to access length

console.log(smartphoneList[3].price);//to access price of pixel

console.log(smartphoneList[2].colors[1]);//syntax to access 2nd color of 3rd smartphone

smartphoneList[4].colors.unshift("red");//to add new color in smartphone 5
console.log(smartphoneList[4].colors);

//Syntax to replace text color in 1st smartphone
smartphoneList[0].colors[smartphoneList[0].colors.length - 1] = "Green"; //replace last color in 1st smartphone
smartphoneList[0].colors.splice(2,1,"Orange")
console.log(smartphoneList[0].colors);

//syntax to change model of 1st smartphone
smartphoneList[2].model = '13 edge'
console.log(smartphoneList[2].model);

//create an array of all smartphone brands
const brand = smartphoneList.map((smartphoneList) => {
    return smartphoneList.brand;
});

console.log(brand);

console.log("---------------------------");



//filter smartphone prices less than 70000

const pricesless = smartphoneList.filter((n) => {
    return n.price < 70000;

});
console.log(pricesless);


console.log("----------------------");



//filter smartphone color containing black
const colorblack = smartphoneList.filter((n) => {
    return n.colors = 'black'
})
console.log(colorblack);



console.log("----------------------");

const blackphones = smartphoneList.filter( phone => phone.colors.includes('black'))
console.log(blackphones);




