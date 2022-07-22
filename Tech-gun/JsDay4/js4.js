// ###################################################### switch statement ############################################\\
// only works === triple equals
// let age = 18;
// switch(age){
//     case 17 :
//         console.log("Not allowed for Club entry he is a kid");
//         break;
//     case 10 :
//          console.log("Not allowed for Club entry he is a kid");
//          break;
//     case 18 :
//          console.log("He is allowed for club entery");
//          break;
//          default :
//         console.log("no inomramtion about this input");

// }
// ***************************************************************************************************************************\\

// ####################################################### typeof() keyword ###########################################################

// typeof() is a keyword used for checking data type of variable

// let variable ;
// console.log(typeof(variable)); // output : undefined

// variable = 444.44;
// console.log(typeof(variable)); // output : number

// variable = "hello typeof()";
// console.log(typeof(variable)); // output : string

// ***************************************************************************************************************************************\\

// ##################################################### type conversion in Js #############################################################\\
/*
1 : Automatic type while interpretaion happend 
2 : Manual with using : Number(); 
                        String();
                        Boolean(); 
*/

// // eg . Automatic type -> most of the JS coverts values to the string autmatically :

// let val =  "hello"  + null;
// console.log(val , typeof(val)); // Output : hellonull string

//  val = 5 + '33';

//  console.log(val , typeof(val));  // output : 533 string // automatically coverts to the string

//  val = 5 + true;
//  console.log(val , typeof(val)); // output : 6 number  // how six ==> bts true treat as 1 so 5 +1 = 6 boolean converts as number

// val =  true + null;

// console.log(val, typeof val); // output : 1 number  // boolean converts as number and null has no value

// ## Manual type ==>

// let val = '' + 0;
// let newVal = Number(val);
// console.log('val =', val ,"and type of val is " , typeof(newVal));  // ouput : val = 0 and type of val is  number

// val = "2" + 1 ;
// newVal = Number(val);
// console.log('val =', val ,"and type of val is " , typeof(newVal));  // ouput : val = 21 and type of val is  number

// same for others as well like String() , Boolean();

// **************************************************************************************************************************************\\

// ######################################################### String Manuplation ##########################################################\\

// 1.length of string : String.length()
let str = "This is a Devolper";
console.log(str.length); // output : 18

// 2. Concatenate a string : String.concat();

str = "hello";
console.log(str.concat(" world !")); // output : hello world !
let str2 = "world-2";
str = str.concat(" ", str2);
console.log(str); // output : hello world-2

// 3. find sub string of string : String.substr(idx , idx);

str = "This is a subtString function in JavaScript ";
str2 = str.substring(10 , 20); // from idx to till idx
console.log(str2); // output : subtString



// 4. finding index number of a given string : String.indexof()

str = "This is a indexof() function in JavaScript ";
str2 = str.indexOf("indexof");
console.log(str2); // output : 10 // count start from 0 idx  in Js as well

// if value not found then return -1
str = "This is a Indexof() , function in JavaScript ";
str2 = str.indexOf("indexof");
console.log(str2); // output : -1 // BECAUSE JS is case senstive Indexof  , indexof both are diffrent thing

// if same more substring available  in string then need give index check from here
str = "hey indexof This is a indexof() function in JavaScript indexof ";
str2 = str.indexOf("indexof", 10); // provding idx for need after this idx number's subtring idx number 
console.log(str2); // output : 10 // count start from 0 idx  in Js as well


// 5. for finding idx number from last of index : String.lastIndexof();

str = "This is a lastIndexOf() function in JavaScript lastIndexOf";
str2 = str.lastIndexOf("lastIndexOf"); // check index number from last idx
console.log(str2); // output : 47 // we have 2 lastIndexOf() , But in 47 number enccounter last lastIndexOf from last

// if no value then retunr -1 same like indexof() . or if need from this index then pass value as same in indexof();
str = "This is a LastIndexOf() function in JavaScript LastIndexOf";
str2 = str.lastIndexOf("lastIndexOf"); // check index number from last idx
console.log(str2); // output : -1 // BECAUSE there is no lastIndexOf in string

// if same more substring available  in string then need give index check from here
str = "hey indexof This is a lastIndexOf() function in JavaScript lastIndexOf ";
str2 = str.indexOf("lastIndexOf", 47); // provding idx for need  to check after 47  idx number's subtring idx number 
console.log(str2); // output : 59 // 

// 6. for removing extra white sapce from string : => String.trim();
 
str = "  hello  world!    ";
str2 = str.trim();
 console.log(str2); // output :hello  world! // now extra white space

 // 7. str.trimstart() and str.trimend() =>
  str = '  hello this is trim start!     ';
  console.log(str.trimStart()); // output:"hello this is trim start!     " // space trims from  start

  console.log(str.trimEnd()); // output:"  hello this is trim start!" // space trims from  end

  //8. for replaceing substring from string : str.replace();
  str = "hello this my statemnet"
 str2 = str.replace("my statemnet", "replace() function in Js");
 console.log(str2); // output : hello this replace() function in Js

 //9.  if substring value not available in false  else true : String.inculdes();
 str = " heelo this us includes() from JavaScript";
 str2 = str.includes("hello");
 console.log(str2); // output : false (because there is no hello subtstring value in given string)
str2 = str.includes("JavaScript"); 
console.log(str2); // output : true (when value matcheed in string then returns true)

