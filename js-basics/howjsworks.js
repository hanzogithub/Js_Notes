// function execution context 

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("harshit", "sharma");
// console.log(personName); 

console.log(window);
console.log(this)
console.log(myfunc)
console.log(fullName)

function myfunc(){
    console.log("this is inside the function");
}
var firstName = "asdadsasd"
var lastName = "hohohooh"
var fullName = firstName + " "+ lastName;
console.log(fullName);

console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);

// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization



// Uncaught ReferenceError: 
// firstName is not defined

// console.log(firstName);

// console.log(firstName);
// let firstName;
// console.log(firstName);

// console.log(typeof firstName);

// let firstName = "deepanshu";

// Clousers Example 
//  1. 
function hello(x){
    const a  = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

var ans = hello("arg");
ans();

// 2. 
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

var ans = printFullName("deepanshu", "kankhedia");
ans();

//Example 3.
function MyFunction3(power){
    return function(number){
        return number**power
    }
}
const square = MyFunction3(2);
const ans1 = square(2);
console.log(ans1);


const cube = MyFunction3(3);
const ans2 = cube(3);
console.log(ans2);


// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans1 = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


//Example 4.
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

//Example 5.
function f1() {
    var a = 'difficult';
 
    return function() {
       console.log(a);
    };
 }
 
 var a = 'easy';
 var f2 = f1();
 
f2();
