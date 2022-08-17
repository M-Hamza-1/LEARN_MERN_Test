// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// ... its same like reset paremter but in array and string and with itrative object it act diffret from reset parameter.

//eg 1 =>
let arr1  =['hello' , 1, ,3 , ' array1'];
let arr2 =[ 2 , 4, 6];

// ... using =>
arr2 = [2 ,4 ,6 ,...arr1];
console.log(arr2); //output : [ 2, 4, 6, 'hello', 1, undefined, 3, ' array1' ]

// use it any positon =>

arr1 = ["hello", 1, , 3, ...arr2 , " array1"]; //output : ['hello' , 1, ,3,  2, 4, 6, 'hello', 1, undefined, 3, ' array1' , ' array1'];

console.log(arr1);

//Assign the first and second items from numbers to variables and put the rest in an array:

let numbers =[1 ,2 ,3 , 4];

let [one , two , ...remains] =numbers;

console.log(one); // output : 1
console.log(two); // output :2
console.log(remains); // output : [ 3, 4 ]


// same as with object and string.

let obj ={
    name : "x",
    age : 36,
 ...remains // added into obj ,as a obj a member
};

// console.log(obj); // output : { '0': 3, '1': 4, name: 'x', age: 36 }

// obj with another object =>


let obj0 = {
  name: "y",
  age: 56,
  ...obj, // all same  key and its value will marged with obj 
};

console.log(obj0); // output : { '0': 3, '1': 4, name: 'x', age: 36 } same kye and value repalced by obj members.

let obj1 ={
      name1 : "obj2",
       age1 : 46,
     ...obj
}
console.log(obj1); //ouput : { '0': 3, '1': 4, name1: 'obj2', age1: 46, name: 'x', age: 36 }
