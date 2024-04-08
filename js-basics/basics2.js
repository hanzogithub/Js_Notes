// from 38
console.log("time stamp lecture 38")
person ={
    name:"deepu",
    age:"21",
    "persone hobbies":["Sleeping","smacking younger siblings","listeninig music"] }

console.log(person.age)
// how to iterate object 


// for in loop 
// Object.keys 
console.log("using For in Loop")
for(let a in person){
// console.log(`${key} : ${person[key]}`);
    console.log(a,":",person[a]);
}
console.log("using Object.keys")
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for(let key of Object.keys(person)){
    console.log(key,":",person[key]);
}

// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

const obj = {
    [key1] : value1,
    [key2] : value2
}
// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
console.log(obj);

// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  // const newObject = { ...obj2, ...obj1, key69: "value69" };
  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject); 

//Object Destructuring 
 const band ={
    bandName : "Guns and Roses",
     song :"sweat chold o mine",  
     song2:"paradise city",
     year:1987

 } 
 console.log(band)

 let {bandName,song} = band;
 console.log(song);
  
let{bandName:x,song :y,...rest} = band;
console.log(rest);

// IMPORTANT 
//Object INside an array 

let users= [
 {userID : 1,firstName : "sawan",gender :"male"},
 {userID:2,firstName:"deepanshu",gender:"male"},
 {userID:3,firstName:"dhruv",gender:"male"},
 {userID:4,firstName:"hten",gender:"male"}
] 

for(let user of users){
    console.log(user.firstName)
}
//Destructuring of object inside array

const[{userID:userid , firstName:usrfirstname}, ,{gender:user3gender}] = users
 console.log(userid)
 console.log(usrfirstname)
 console.log(user3gender)