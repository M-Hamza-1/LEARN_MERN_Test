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

// 1.length of string 
let str = "This is a Devolper";
console.log(str.length); // output : 18

if("This is a Devolper" === str){
    console.log("equals");
}
else{
    console.log("!equals");
}