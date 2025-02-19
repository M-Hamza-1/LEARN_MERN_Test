// // ########################################## Dates objects ######################################################

// // create object first => crruent time basis
// const MyDate = new Date();
// console.log(MyDate);  // output => 2022-07-27T02:59:35.420Z // from the internet

// // .getTime() => date returns in milisecond :
// console.log(MyDate.getTime()); // output => 1658892028880

// // Date.now() => time in milisec
// console.log(Date.now());

// //.getDay() => days retruns Monday to sunday

// console.log(MyDate.getDay()); //  output => 3

// // .getHours() => retruns the only hour digit
// console.log(MyDate.getHours()); // output => 9

// // .getMinutes() =>
// console.log(MyDate.getMinutes()); // output => 0

// // .getSecond() =>
// console.log(MyDate.getSeconds()); // output => 45

// // .getMonth() => returns month value start with 0 and end in 11.
// console.log(MyDate.getMonth()); // output => 6 // its july right now but in js number start 0-11 (jan -0) and (Dec-11)

// // .getFullYear() => retruns the  year
// console.log(MyDate.getFullYear()); // output => 2022
// // there are many more methods

// // We use Date object with customized date as well passing as and argument.
// // there are seven parameter we use =>  (Year,MonthIdx,Date, Hours, Minutes, seconds,miliseconds)

// const OldDate = new Date(2019 ,11 ,10 , 17 ,10 ,20 , 30); // passparameters year to mili second as per the requirment.

// console.log(OldDate.getFullYear()); // OUTPUT => 2019

// console.log(OldDate.getMonth()); // output => 11 // as same as above

// // Passing argument as and string formate =>
// console.log(MyDate.toString()); // output => Wed Jul 27 2022 09:29:35 GMT+0530 (India Standard Time)
// console.log(OldDate.toString()); // output => Tue Dec 10 2019 17:10:20 GMT+0530 (India Standard Time)

// const StrDate = new Date("Tue Dec 10 2019 17:10:20"); // pass value as string
// console.log(StrDate.getFullYear()); // output =>2019
// console.log(StrDate.getMonth()); // output =>11
// console.log(StrDate.getDate()); // output =>10 // all methord work as same as above

///////////////////////////////////////////////   Date Using Set \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// const myDate = new Date();
// myDate.setFullYear(2019);
// console.log(myDate);  // output => 2019-07-27

// myDate.setDate(3);
// console.log(myDate); //output => 2019-07-03 T 06:44:32.028Z

// // more as same as like above methods

//****************************************************************************************************************************************\

// ################################################## Object using new operator #############################################################

// // how to create =>  new Object();
//    let NewObj = new Object;
// // how to define => with dotnotaion

// NewObj.name =" yash raj";

// console.log(NewObj);  // output : { name: ' yash raj' }
// NewObj.age  = 50;
// console.log(NewObj);  // output : { name: ' yash raj', age: 50 }

// ################################################ size of object => Object.keys() #############################################
// Object.keys retrun the key from object=>
// console.log(Object.keys(NewObj).length); // output => 2

// NewObj.type = " cinema";

// console.log(Object.keys(NewObj).length); // output => 3

// ############################################ getter and setter ####################################################

/*
 object has two type of properties =>
1 . Data properties. 
eg: let obj ={name : "devesh"}

2 . Accessor Properties.
  get => geting value of object
  set => seting value of object 
*/

// getter => using getter object methods can be accessable like other properties also manuplation can be done

// const obj = {
//                 name : "Swati",
//                 age : 33,
//                 genedr : "female",
//                 get getMethod(){
//                     return this.name.toUpperCase();  // mauplating as well
//                 }
// }

// // accessing without method way =>
// // console.log(obj.getMethod()); // output => TypeError: obj.getMethod is not a function

// console.log(obj.getMethod); // output => SWATI  ( accessing like other propeties and manuplation)

// setter => used for change a vaule of object

// const SetObj = {
//                  name : "rahul roy",
//                  age : 36,
//                  gender : "male",
//                  set setMethod(x){
//                           return this.name = x.toUpperCase();
//                  }

// }

// SetObj.setMethod ="vijay raaj"
// // setting and manupalting the value using setter in object method
// console.log(SetObj);  // output => { name: 'VIJAY RAAJ', age: 36, gender: 'male', setMethod: [Setter] }

// ################################################# object consrtcutor #############################################################################\\

// /*
//  contrcutor used as an templet for similar type of multiple object.. when we need same type of property in multiple object
//  */
// // How declare a contrcutor => there is a constructor of student type.
//  function Student(Name , Class , Age , rollNo){
//          this.NAME = Name;
//          this.CLASS = Class;
//          this.AGE = Age;
//          this.ROLLno = rollNo;
//  }
//  // how to use this => we make multipe student type object using this tapmlet

//  let student1 = new Student("shyam" , 12 , 16 , 1991110011002); // here student object is build with thsee perameter vaules
//  console.log(student1); // outout => Student { NAME: 'shyam', CLASS: 12, AGE: 16, ROLLno: 1991110011002 }

//  let student2 = new Student("Kanchan" , 10 , 14 , 38); // another same object
//  console.log(student2); // output => Student { NAME: 'Kanchan', CLASS: 10, AGE: 14, ROLLno: 38 }.

//  // change the value od those object.

//  student1.AGE = 17;
//  student1.NAME = "vjiay Raaj"
//  console.log(student1);   // outout => Student { NAME:'vjiay Raaj, CLASS: 12, AGE: 17, ROLLno: 1991110011002 }

//  // how add new value in contstructor => // ReferenceError:

//  Student.GENDER = "gender";  // ReferenceError: gender is not defined

//   console.log(Student);  // we can't add new property in constructor like this

//   student2.GENDER ="FeMale" // this possible
//   console.log(student2);  // output => Student { NAME: 'Kanchan', CLASS: 10, AGE: 14, ROLLno: 38 ,  GENDER: 'FeMale'}.

// //*********************************************************************************************************************************************************/

//############################################################# Prototype in js#####################################################################

// // Prototype in js => used for add new property in the constructor. || in Js protoype is supperclass

// Student.prototype.nationality =" Indian";
// console.log(student1.nationality); // output :  Indian
// console.log(student2.nationality); // output :  Indian

// let student3 = new Student("shyam", 12, 16, 1991110011002);
// console.log(student3.nationality); //// output :  Indian

// // ################################################## Nested object in Js ############################################################\\

// // object inside objects

// const user = {
//                id : "iam_NightBot",
//              email : "xyz@gmail.com",
//             info : {            // this is nested object
//                      name : "Rahul roy",
//                      age : 26,
//                      gender   : "male",
//                      address  : { // this is also nested object here
//                         city  : "kasol",
//                         state : "Himanchal Pardesh",
//                         pin   : 363401,
//                         fun(){
//                             console.log(`this function  belongs to ${user.id} user`);
//                         }
//                      }
//             }
// }

// // how access =>
//  console.log(user.info);
/* output=>
    {
  name: 'Rahul roy',
  age: 26,
  gender: 'male',
  address: {
    city: 'kasol',
    state: 'Himanchal Pardesh',
    pin: 363401,
    fun: [Function: fun]
  }
} 
  */
//  console.log(user.info.address.fun()); // output => this function  belongs to iam_NightBot user

// ############################################################### Hoisting In JS ###################################################################

// hosting  js machnism where variable and function decleration  moved at top from their scope by interpreter.

// hoisting with function =>

//  hello(); // output => hello this is hoiesting example in js

//  function hello(){
//    console.log("hello this is hoiesting example in js");
//  }
/*
 // it will not give the error becuse => how its works at the of inperpretaion function decleartion come at top
function hello(){
 
   console.log("hello this is hoiesting example in js"); 
 }
hello(); 

*/

// hoisting with var => var x ; come into top at the time of interpretaion

// console.log(x); // output => undefined

// var x =7;

/*
 how its works Bts => var x come in top;

 var x;
 x = undefinde ;

console.log(x);

x=7;

*/

// (hoisteing with let and const ) => let comes to the top as declere statement but gives error

// console.log(y);  // output =>ReferenceError: Cannot access 'y' before initialization

// let y =7;
/*
   how its works Bts =>

    let y ;
   // let not asign here undefined like var therefore error occures.
    console.log(y);

    y = 7;
     
*/

// console.log(z);  // output => ReferenceError: Cannot access 'z' before initialization

// const z =2;

// ################################################################ Strict mode in js #########################################################################

// x =5;
// console.log(x); // outout => 5 it will not give any error in js

/*
    How it works in js => berfore the code exicution js interpreter  move the top all varialbe decleartion and function as per thier scope.
    And declare them as well.
    
    var x;
    x=5;
    console.log(x);


*/

// Some time its problmatic for code so we user ( "use strict " ) inside double qoutes and single

// Now it gives error
// "use strict";
// x =6;
// console.log(x); // output => ReferenceError: x is not defined
