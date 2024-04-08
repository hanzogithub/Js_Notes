// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "deepanshu",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "hiten",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "hoohhohoohoh",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();

//Call Appy Bind 
console.log("Using call below ")
var user1 = {
    name :"deepanshu",
    age:"22",
    about : function(){
        console.log(this.name,this.age)
    }
}

var user2 = {
    name:"ujjwal",
    age:"23"
}

user1.about.call(user2);

var user3 = {
    name :"dhruv",
    age:"24",
    about : function(hobby,favartist){
        console.log(this.name,this.age,hobby,favartist)
    }
}

console.log("when there is an parameter in an function with call")

user3.about.call(user1,"anime","bon jovi");

console.log("apply example")
user3.about.apply(user3, ["sfa" , "joji"] );
console.log("Bind Example")
console.log("Bind always return an function which can be called anywhere")
var fun = user3.about.bind(user2,"movies","dua lipa");
fun();
//Minor Steps to not do 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

const myFunc = user1.about.bind(user1);
myFunc();


// don't do this mistake 
// const myFunc = user1.about;
//  user1.about();
// in above case what we are doing is 

// const myFunc = function(){
//     console.log(this.firstName,this.age);
// }








































