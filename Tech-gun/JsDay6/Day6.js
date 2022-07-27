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

// let person = {
//   name: "Raghav",
//   age: 22,
//   home: "Bhopal",
//   number: 9414121214,
// };

// // How to access or dispaly
// console.log(person); // output : { name: 'Raghav', age: 22, home: 'Bhopal', number: 9414121214 }

// // 1. single  value :  dotnotaion

// console.log(person.name); // output : Raghav

// // 2. using array notaion : person['key'];
// console.log(person["number"]); // output : 9414121214

// // undefind value in object :
// console.log(person.lastName); // output : undefined

// // How to delete peoperty from object : using delete
// delete person.number;
// console.log(person); // output : { name: 'Raghav', age: 22, home: 'Bhopal' }

// // how check property available or not : using in opretor || with undefined key name

// // 1 : with undefined key => returns undefined
// console.log(person.number); // output : undefined
// //2 : with in operetor : retruns true or false
// console.log("number" in person); // false

// // how access values using loops in object : using in operetor

// for (let key in person) {
//   console.log(key); // output : name age home ( all keys available in object)
// }

// for (let key in person) {
//   console.log(key + ":" + person[key]); // output : name: Raghav, age: 22, home: Bhopal,
// }

// #################################################### Methods in Object ###############################################################
/*
   Basically 4 ways are available for using methods in Js
   1 :  obj.key = function(); // using dotnotaion
   2 : while object declare as a key value pair
   3 : in ES6 at the of object declartion direct function name and value;
   4 :
*/

// using Dotnotaion : =>

// let obj = {
//   name: "object",
//   type: "function",
//   age: 2,
// };

// obj.fun = function () {
//   console.log("hello js this object method");
// };
// console.log(obj); //output =>  { name: 'object',type: 'function',age: 2,fun: [Function (anonymous)]}

// obj.fun(); //output =>  hello js this object method

// // 2 .while object decleration =>

// obj ={   name: "javascript",
//          age :   27,
//          type : "Scripting language",
//          function : function(){
//             console.log(" hello javaScript");
//          }
// }
// obj.function(); // output :  hello javaScript

// // 3. ES6 version at the of decleartion =>
// obj = {
//           name : "ES6",
//           age  : 2015,
//           type : "Standard",
//           fun1(){
//              console.log("hello this is ES6 type method");
//           }
// }
// obj.fun1(); // ouput => hello this is ES6 type method

// // 4. with normal function  => with dotnotaion

// obj ={
//     name : 'rahul',
//     lName :  "sinha",
//     age : 25

// }

// obj.myFunction = function sayHello(){
//     console.log("hello myFunction");
// }

// obj.myFunction(); // Output => hello myFunction

// ############################################################### this in object ######################################################\\

//  In JS this keyword refers to an object.

//  let obj = {
//             name : "Object",
//             type : "global",
//             Element : 4,
//             ThisFunction(){
//               console.log(this.ThisFunction); // using this at the place of obj for accessing property of obj.
//               console.log(this.name);
//               console.log(this.type);

//             },
//             fun : function(){
//               return this;      // output => here this returning obj
//             }

// }

// obj.ThisFunction();  // output => [Function: ThisFunction] Object global

// let val = obj.fun();
// console.log(val);  //output => {name: 'Object', type: 'global',Element: 4,ThisFunction: [Function: ThisFunction],fun: [Function: fun]}

// // ################################################# Math obejct ####################################################

// //1. Math.pow() => used for power of number

// console.log(Math.pow(5,2)); //out put => 25

// // 2. Math.PI => pi value
// console.log(Math.PI); // output => 3.141592653589793

// // 2.Math.round() => used of round of number of decimal value based eg : 4.4 = 4 and 4.6 = 5

// console.log(Math.round(4.4)); // output => 4
// console.log(Math.round(4.6)); // output => 5

// // 4. ceil => ceil used for maximum nearest integer of decimal val  eg : 4.4 = 5 and 4.4 = 5 becuase 5 us nearest max vaule

// console.log(Math.ceil(4.2)); // output : 5
// console.log(Math.ceil(8.6)); // output : 9

// // 5. floor => nrares minimum integer of decimal
// console.log(Math.floor(4.2)); // output : 4
// console.log(Math.floor(4.6)); // output : 8

// // 6 .trunc => Returns the integer part of value eg 4.9 => 4 || 6.2 = 6 || 4.2 = 4 || 6.2 = 6

// console.log(Math.trunc(4.2)); //output => 4
// console.log(Math.trunc(4.6)); //output => 4
// console.log(Math.trunc(8.6)); //output => 8
// console.log(Math.trunc(8.2)); //output => 8

// // 7 .Math.min() => fir minimum value
//   console.log(Math.min(33,4,0,-1,200,2)); // output => -1

// // 8 . Math.max() => used for max value in given

//   console.log(Math.max(33,4,0,-1,200,2)); // output => 200

// ########################################################## Math.random() ###############################################################

// Math.random used for get random number between (0 to 1) =>

// let Rnum = Math.random();
// console.log(Rnum); // output : => 0.26486671376946047
// console.log(Rnum); // output : => 0.5772204908660821

// console.log(Rnum); // output : => 0.22479344530713186  // every time gives new number

// console.log(Math.trunc(Rnum)); // output => 0

// write function to get number between (1-6) like ludo game =>

 function Rnum(min , max){
   let val = Math.random() * max + min; // How it works => eg : (0.5772204908660821 * 6 ) + 1 = (3.4633229452) +1 = 4.4633229452
   console.log(Math.trunc(val)); 
 }
  Rnum(1 ,6); // output : 4 every time difrrent between 1-6

  