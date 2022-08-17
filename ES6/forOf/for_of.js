"use strict"
/*
  the for of loop =>

  it used over the itrable object like array , string , arguments , map so on
 Same like for each loop in java.

 syntax : => for(var name of  itrable object){
                         // statmenet
                 }

*/

let arry =[1 , 2, 3 , 4 , 5];

for(let elm of arry){ // elm has every arry elm one by one. no need to terimnation condition. 
      console.log(elm);
}
/*
1
2
3
4
5
*/

let obj ={
    name : "Rahul sinha",
    age : 24,
    proffesion : "boxer",
    coach : "Devesh"
}
// for of not work over the object. directly error occures =>
// for(let elm of obj){
//   console.log(elm); // TypeError: obj.key is not iterable
// }




// using for in array index or key object access instead of value. 
for(let key in obj){
let value = obj[key];
console.log(value); // as an array type access value with array notaion use
}



// for string =>
let str = "hello world";
for (let Char of str) {
  console.log(Char); 
}
/* 
output :
h
e
l
l
o
 
w
o
r
l
d
   
*/


// wap sum program using for of ===>

let arr = [1 , 2, 3, 4, 5]
let total =0;
for(let elm of arr){
    total += elm;
}
console.log(total); // output : 15

