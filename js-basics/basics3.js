//Function declaratipn

function sing(){
    console.log("hihihihihihihihihihihihihihihih")
}

function sum(x,y){
    console.log(x+y)
}
sing();
sum(3,4);

function binarysearch(arr,x){
  let l =0,h=arr.length -1;
  while(l <= h){
    let mid = Math.floor((l+h)/2);
    if(arr[mid] == x){
        return mid;
    }
    else if(arr[mid] < x){
        l =mid+1;
    }
    else 
    h=mid-1;
  }
  return -1; 
}
var ans = binarysearch([1,2,3,4,5,7,8,9],5);
console.log(ans+1);

// function expression another way to declare function 
const linearsearch = function(arr,x){
 for(let n in arr){
    if(n == x){
        return true;
    }
 }
 return false;
}
console.log(linearsearch([1,2,3,4,5,6,7,8,9], 4))

//Arrow Function 

const binarysearchusingarrow = (arr,x) =>{
    let l =0,h=arr.length -1;
    while(l <= h){
      let mid = Math.floor((l+h)/2);
      if(arr[mid] == x){
          return mid;
      }
      else if(arr[mid] < x){
          l =mid+1;
      }
      else 
      h=mid-1;
    }
    return -1; 
  }
  var ans = binarysearchusingarrow([1,2,3,4,5,7,8,9],5);
  console.log("position of " + 5 +" is : " + (ans+1) );

  //when there is only one parameter in arrow funtion

  const firstel = str => str[0];
  console.log(firstel("hahahahah"))

 // Hoisting 
 // hoisting 

// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello = "hello world";
// console.log(hello);
 // functions inside function
 
 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();

//Lexical Scope 

const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

var ans = addAll(4,5,4,2,10);
console.log(ans);

// param destructuring 

// object 
// react 

const person = {
    firstName: "deepanshu",
    gender: "male",
    age: 21
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);

//callback function 

function f1(){
  console.log("Inside f1 ");
}
function f2(a){
    console.log(a);
}
function f3(a){
    a();
}

f2(f1);
f3(f1);

//function returning function 
const a = function(){
    function a(){
     return "hello world"
    }
   return a;
}

var b = a();
console.log(b());
