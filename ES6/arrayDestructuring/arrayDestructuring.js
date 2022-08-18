// Here is the old way of assigning array items to a variable:
let array = [1 ,2 ,3 ,"hello"];
let one = array[0];
let two = array[1];
let three = array[2]; // so on..

// with Destructuring =>
let arr = ['one' , 2 , 'three' , 6];
let [var1 , var2 , var3 , var4] = arr; // all valu  asigned with those variables

console.log(var1); // output : one
console.log(var2);  // output : 2
console.log(var3);  // output : three
console.log(var4); //  // output : 6


// deafault value and undefined  value  => with Destructuring

let arr2 = [44 ,  ,"one", 2,  , "three", 6]; // idx =2 is empty

let [a =33, b=89, x , y, z , i, j ,k ]= arr2;
console.log(a); // output : 44 // default value not asigned becuase actual vaule available in idx 0
console.log(b); // output : 89 // idx 1 is empty therefore default value asigned in to b.
console.log(x); // output : one
console.log(y);  // output : 2
console.log(z);   //output : undefined ( because index 3 is empty.)
console.log(i);  // ouput : three
console.log(j);  // ouput : 6
console.log(k);  // ouput : undefined (because there is no value avilable after idx 6)

// in nesting array :  destructuring => 

let nestedArray = [1,2,3,4,["one","two", "three"] ,5];

let [val1 , val2 , val3, val4 , val5 , ] = nestedArray;
console.log(val1); //output : 1
console.log(val2); //output : 2
console.log(val3);  //output : 3
console.log(val4);  //output : 4
console.log(val5);  //output : ["one","two", "three"] // val5 like a array now
// 6 is ignored

// else =>
let nestedArray2 = [1, ["one", "two", "three"], 5];
let [idx1, [value2 , value3 , value4], idx2] = nestedArray2;
 console.log(idx1); //output : 1
  console.log(idx2); //output : 5
console.log(value2);   //output : one // also add singke single value from nested array.
console.log(value3);  //output : two
console.log(value4); //output : three

// spread operator and   rest parameter =>

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
// rest parameter as l value and and spread operator as r value..
var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];

console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"] // rest variable become array using rest parameter