// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, same like argumnet object but diffrent way.
// (...) three dots are used before vairable..
function rest(...args){
    console.log(args);
}
rest(1,2,3,4,5,6,7); //output: [1,2,3,4,5,6,7] : an array

// wap of of numbers passed through actual argumnets using reset parameter =>

function sum(...sum){
 // now sum is array =>
 let total=0;
 for(let val of sum){
    total += val;
 }
  console.log(total);
}
// 10 arguments at one time
sum(1,2,3,4,5,6,7,8,9,10);  // output : 55


//Assign the first and second items from numbers to variables and put the rest in an array:

let numbers =[1 ,2 ,3 , 4];

let [one , two , ...remains] =numbers;  // with array destructuring 

console.log(one); // output : 1
console.log(two); // output :2
console.log(remains); // output : [ 3, 4 ]