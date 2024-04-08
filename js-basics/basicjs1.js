console.log("hello")
var fname ="hoho";
console.log(fname)
fname="yooy"
console.log(fname)
var num=5;
console.log(num ** 2)
var age1 = 21;
let firstName = "Deepanshu"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age1}`
var a = 131546456465465565454545454545465;
console.log(a)
a =BigInt(a);
console.log(a);

// operator
var num1 =7,num2="7";
console.log(num1 === num2)

//ternery operator
let age = 4;
 let drink;

 if(age<5){
     drink = "coffee";
 }else{
    drink = "milk";
 }
 console.log(drink);
 
 // ternary operator / conditional operator 

var age2 = 3;
 var drink1 = age2 >= 5 ? "coffee" : "milk";
 console.log(drink1)
 // nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
console.log(typeof userGuess)
if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}


let day = 3; 


if(day === 0){
    console.log("Sunday");
}else if(day ===1){
    console.log("Monday");
}else if(day ===2){
    console.log("Tuesday");
}else if(day ===3){
    console.log("Wednesday");
}else if(day ===4){
    console.log("Thrusday");
}else if(day ===5){
    console.log("Friday");
}else if(day ===6){
    console.log("Saturday");
}else{
    console.log("Invalid Day");
}


var day1 = 5;

switch(day1){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

//Array
let fruit=["mango","apple","banana"];
console.log(typeof fruit)
console.log(Array.isArray(fruit)); 
// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)

// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// array destructuring 
//means giving value of each elemet to another veriable
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

//Object 
const person = {
    name: "deepanshu",
    age: 21,
    hobbies: ["anime", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person); 

// difference between dot and bracket notaion
const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }

console.log(person["person hobbies"]);
person[key] = "abcd@gmail.com";
console.log(person);
