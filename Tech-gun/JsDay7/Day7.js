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
// // .getMonth() => retruns month value start with 0 and end in 11.
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
// let NewObj = new Object; 
// // how to define => with dotnotaion

// NewObj.name =" yash raj"; 

// console.log(NewObj);  // output : { name: ' yash raj' }
// NewObj.age  = 50;
// console.log(NewObj);  // output : { name: ' yash raj', age: 50 }

// ################################################ size of object => Object.keys() #############################################

// console.log(Object.keys(NewObj).length); // output => 2

// NewObj.type = " cinema";

// console.log(Object.keys(NewObj).length); // output => 3


// ############################################ getter and setter ####################################################



/*
 object has two type of properties =>
1 . Data properties . 
eg: let obj ={name : "devesh"}

2 . Accessor Properties.
  get => geting value of object
  set => seting value of object 
*/


// getter => using getter object methods can be accessable like other properties also maluplation can be done

const obj = {
               name : "Swati",
                age : 33,
                genedr : "female",
                get getMethod(){
                    return this.name.toUpperCase();  // mauplating as well
                }
}

// accessing without method way =>
// console.log(obj.getMethod()); // output => TypeError: obj.getMethod is not a function

console.log(obj.getMethod); // output => SWATI  ( accessing like other propeties and manuplation)


// setter => used for change a vaule of object

const SetObj = {
                 name : "rahul roy",
                 age : 36,
                 gender : "male",
                 set setMethod(x){
                          return this.name = x.toUpperCase();
                 }


}

SetObj.setMethod ="vijay raaj"
// setting and manupalting the value using setter in object method
console.log(SetObj);  // output => { name: 'VIJAY RAAJ', age: 36, gender: 'male', setMethod: [Setter] }