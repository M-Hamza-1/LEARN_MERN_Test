// ******************************************* NaN **********************************************\\
/*
 int Js NaN is short of   "Not a number" 
 isNaN() methord gives true if number is NaN .. 
 in JS NaN is number that is not legel number..
 isNaN() retrun true if value is NaN..

*/

// Eg: 1 
 // let x,y;   // both variable are  undefined
 // console.log(x-y); //  NaN 

 // // Eg: 2
 // let str = 'hello';
 // console.log(isNaN(str)); // true

 // // Eg: 3
 // let val0 = 3 , val1 =2; // both has integer value 
 // let ans = isNaN(val0-val1);
 // console.log(ans); // false 

 //************************************************+++********************************************************\\



 //************************************************Power of the Digit ***************************************\\

 // using ** double  Astreisk  (Airthmatic operator)==>

 // let num = 5;
 // let sqr = num**2;
 // let cube = num **3;
 // console.log(`sqr of ${num} = ${sqr} && cube of ${num} =${cube}`);


// using Math.pow function
// let num =5;
// let sqr = Math.pow(num , 2);
// let cube = Math.pow(num ,3);
// console.log(`Squre of ${num} = ${sqr} && Cube of ${num} = ${cube}`);

//**************************************************************************************************\\



//***************************** Why " " double quotes && ' ' single quoets same use case ******************\\

/*
1-> if we need to print "" we use single qoutes eg. Hello""world
1-> if we need to print '' we use double qoutes eg . Hello''Again

*/

// // Eg: 1
// console.log('Hello""World "From eg 1"'); // output =>  Hello""World "From eg 1"
// // Eg: 2
// console.log("Hello''Again 'From eg 2'"); // output =>  Hello''Again 'From eg 2'

// // However we achive this using backtrics as well.

// // Eg: 3
// console.log("hello\"\"World \"From Eg 3\""); // output =>  Hello""World "From eg 3"
// //Eg: 4
// console.log("hello\'\'Again \'From Eg 4\'"); // output =>  Hello''Again 'From eg 4'



// ************************************************************************************************ \\


// ******************* Logical Double equlas == vs Logical triple Equals === ****************************\\

// Logical == double Equals do type conversion first to the string before execution 

// let num1 = 32; // number type data 
// let num2 = '32'; // string type data
// let ans  = (num1==num2)?"both are same": "both are diffrent"; // before compair both value converted as a srting
// console.log(ans);  // output => both are same


/*
  8 == 5 //false 
 "5" == 5 // true .. becuase number will also convert to string.
'32' != 32 // false 

*/

// Logical === triple Equals check data types  first to the string before execution 

// let num3 = 32; // number type data 
// let num4 = '32'; // string type data
// let ans2  = (num3===num4)?"both are same": "both are diffrent"; // before compair both data type cheack first 
// console.log(ans2);  // both are diffrent

/*
  8 === 5 //false    # here data type check first then comapirs
 "5" === 5 // false  # here data type check first then comapirs
'32' !== 32 // true  # here data type check first then comapirs
 
*/


//**************************************************************************************************************************************\\



//################################################### Nulish coalescing Operator ?? ####################################################\\


/*
 symbole : ??
: Syntex : Left expression ?? Right Expression ;
: When left expression has ==> Null , undefined  then ?? operator evaluate right expression value  

*/

// let val; // undefined automaticlly
// console.log( val?? "value is undefind"); // Output : value is undefind

// // eg: 2
// let n1 =null ;
// let ans =   (n1 ?? "n1 has null value");
// console.log(ans); // ouput : n1 has null value


// ************************************************************************************************************************************* \\


// we have option ${} to print a variable and string print together with in qoutes using tilde ``
// string interpolation
// let agent = {
//    name : "Bond",
//    age :   100,
//    id : "007",
// };
// console.log(`value name is ${agent.name} and id ${agent.id} `);