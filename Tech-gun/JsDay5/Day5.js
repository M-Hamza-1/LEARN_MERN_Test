// ############################################# Array ####################################################################\\
// let arr = [1, 2, 3, 4, "5", "6", "8"];
// arr.forEach(fun);

// function fun(elm) {
//   console.log(elm);
// }


// 1 : push => Add a element last of the array :

// let arr =['naruto' , 'loofi','itachi','madra','zoro','light' , 8.8]; //[ 'naruto', 'loofi',  'itachi', 'madra'  'zoro',   'light',  8.8,  'Gojo']
// console.log(arr);
// arr.push("Gojo");
// console.log(arr);

// // 2 : Pop => removing element from last of array
// arr.pop();
// console.log(arr);  //[ 'naruto', 'loofi',  'itachi', 'madra'  'zoro',   'light',  8.8]

// // 3 : unshift : adding an element first idx of array

// arr.unshift("sakhuna");
// console.log(arr); //['sakhuna' , naruto', 'loofi',  'itachi', 'madra'  'zoro',   'light',  8.8]


// // 4. shift => removing first idx element from array

// arr.shift(); 
// console.log(arr);   //[ 'naruto', 'loofi',  'itachi', 'madra'  'zoro',   'light',  8.8]
// arr.shift(); 
// console.log(arr);  //[ 'loofi',  'itachi', 'madra'  'zoro',   'light',  8.8]

// // 5. splice => More then one element removed from given idx

// arr.splice(3 ,2); // from idx-3 2 elements delete
// console.log(arr); // [ 'loofi', 'itachi', 'madra', 8.8 ]

// // 6. indexof() => retrun idx of given elemnt as same as string
// let idx = arr.indexOf(8.8);
// console.log(idx); // output : 3

// // 7. Array.isArray(arr) => check if array then retrun true else false

// let val  = Array.isArray(arr); // return true.

// if(val == true){
//   console.log("this is a array"); // this is a array
// }
// else {
//   console.log("given value is not array");
// }

// val = Array.isArray(idx); // returns false because idx is not array 

// if (val == true) {
//   console.log("this is a array"); 
// } else {
//   console.log("given value is not array"); // given value is not array
// }

// // 8. split() => covnerts string to a array

// let str = 'this is a string to array converstion with split function';
// arr = str.split(' '); // in paranthisis we pass where to saparet the words as an element here we passed from space;
// console.log(arr); // ['this', 'is',  'a','string', 'to','array', 'converstion', 'with','split','function']

// // 9 . join() => vice versa of split it converts array and string
// arr =['this', 'is' , 'array', 'converstaion', 'to','the string','with','join','function']
// str = arr.join('-'); // whatever we pass in to the paranthisis as an argument that saparets the element
// console.log(str);  // this-is-array-converstaion-to-the string-with-join-function
 

// // 10. .concat() => add array using concatination function
// let arr2 = ["loofi", "itachi", "madra", 8.8];
//  let arr3 =[1,2,3,4,5];
//  arr =[true , false , null , undefined , NaN , 'string' ]

//  let arr1 = arr.concat(arr2 , arr3);
//  console.log(arr1);  // output : [true,false,null, undefined, NaN,'string','loofi','itachi', 'madra',8.8, 1, 2 ,3 , 4,  5]



 /***********************************************************************************************************************************\
  

//#############################################################################2dArray########################################################


// 2d array difination and initialize
let anime = [
  ['Naruto',   'shipuden',  '8.8']
 ,['Boruto' ,  'the-gen-z', '7.2'],
  ['One-pice', 'skypia',    '8.8']
];

for(let i=0; i<anime.length; i++){
  for(let j=0; j<anime[i].length; j++){
    console.log(`[${anime[i][j++]} ${anime[i][j++]} ${anime[i][j++]} ]`);
  }
  console.log("\n");
}


//***************************************************************************************************************************************\


//#################################################################function in js #############################################################

// create a sum function =>

// function sum(num1, num2) {
//   console.log(`sum of ${num1} + ${num2} is ${num1 + num2}`);
// }
// sum(555, 44);




// // ********************************************  Arguments object  ************************************************************************\\

// // Argument array => an array object store the value of arguments passed in function
// // When more then 2 or three arugments passed in  function :

// function sum2() {
//                                  // store all value in arguments
//   console.log(arguments); //[Arguments] { '0': 22, '1': 44, '2': 33 }      // because its an array object
//   console.log(arguments.length); // 3
//  // sum of those parameters
//   let sumVar = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sumVar = sumVar + arguments[i];
//   }
//   console.log(`Sum = ${sumVar}`);
// }
// sum2(22, 44, 33,99); // when we have multiple arguments to pass
*/



// Function in variable =>

function sum(num1 , num2){
  console.log(num1+num2);  //
}

let addNum = sum; // store function name 
addNum(2,2);  //output: 4; 


// OR direct asign the function to the variable

addNum = function sum(num1 , num2){
   console.log(num1 + num2);
}

addNum(5,5);  // output : 10  // varibale used as function name now