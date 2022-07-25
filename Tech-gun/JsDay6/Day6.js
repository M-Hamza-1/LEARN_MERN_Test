// ################################################Anonymous function ###################################################################
/* Function without name is called anonymous function.. 
Anonymous function has local scope because they don'nt have any name.. 
And in ram  function is called by using name and that contain space in memory, But Anonymous function has no name.

*/

// function(){
//     console.log("its gives error"); // Output : //SyntaxError: Function statements require a function name
// }

// So how use them..
// 1. asigning to the Variable : =>

// let fun = function(){
//   console.log("hello world"); // Output : hello world
// }
// fun();

// // 2. Using anonymous functions as arguments : eg with settimeout("function name" , time in ms)
//  setTimeout(function(){
//    console.log("hello this is from anonymous function"); // Output : hello this is from anonymous function >>( after three second later)
//  },3000);

//  // 3 .immediatley inovked function : => when we need to use function localy once and at the same time of declartion

//   (function(){
//     console.log("hello this is immediatly invoked anonymous function"); // output : hello this is immediatly invoked anonymous function
//   })(); // this is how it is called at same time..

//*************************************************************************************************************************************\\

// ############################################################# Objects in Js #########################################################\\

/* 
obejcts has Key and value pairs like : name : "Devesh", where name is key and  devesh is value.
syntax of object is : let obj = {name : "devesh", age : 35, Number : 8171280446};
*/

let person = {
  name: "Raghav",
  age: 22,
  home: "Bhopal",
  number: 9414121214,
};

// How to access or dispaly
console.log(person); // output : { name: 'Raghav', age: 22, home: 'Bhopal', number: 9414121214 }

// 1. single  value :  dotnotaion

console.log(person.name); // output : Raghav

// 2. using array notaion : person['key'];
console.log(person["number"]); // output : 9414121214

// undefind value in object :
console.log(person.lastName); // output : undefined

// How to delete peoperty from object : using delete
delete person.number;
console.log(person); // output : { name: 'Raghav', age: 22, home: 'Bhopal' }

// how check property available or not : using in opretor || with undefined key name

// 1 : with undefined key => returns undefined
console.log(person.number); // output : undefined
//2 : with in operetor : retruns true or false
console.log("number" in person); // false

// how access values using loops in object : using in operetor

for (let key in person) {
  console.log(key); // output : name age home ( all keys available in object)
}

for (let key in person) {
  console.log(key + ":" + person[key]); // output : name: Raghav, age: 22, home: Bhopal,
}

// #################################################### Methods in Object ###############################################################
/*
   Basically 4 ways are available for using methods in Js
   1 :  obj.key = function(); // using dotnotaion
   2 : while object declare as a key value pair
   3 : in ES6 at the of object declartion direct function name and value;
   4 :
*/

// using Dotnotaion : =>

let obj = {
  name: "object",
  type: "function",
  age: 2,
};

obj.fun = function () {
  console.log("hello js this object method");
};
console.log(obj); //output =>  { name: 'object',type: 'function',age: 2,fun: [Function (anonymous)]}

obj.fun(); //output =>  hello js this object method


// 2 .while object decleration =>

obj ={   name: "javascript",
         age :   27,
         type : "Scripting language",
         function : function(){
            console.log(" hello javaScript");
         }
}
obj.function(); // output :  hello javaScript

// 3. ES6 version at the of decleartion =>
obj = {
          name : "ES6",
          age  : 2015,
          type : "Standard",
          fun1(){
             console.log("hello this is ES6 type method");
          }
} 
obj.fun1(); // ouput => hello this is ES6 type method

// 4. with normal function  => with dotnotaion

obj ={
    name : 'rahul',
    lName :  "sinha",
    age : 25

}

obj.myFunction = function sayHello(){
    console.log("hello myFunction");
}

obj.myFunction(); // Output => hello myFunction


// ############################################################### this in object ######################################################\\