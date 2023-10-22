// Function Return Types and Void 
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
var val;
val = add(5, 12);
console.log(printResult(val)); // Result: 17 undefined // undefined is the return type of printResult function because it does not return anything
// here some issue will occures uisng this way  =>
val = printResult;
val = 5;
// console.log(val(5)); // TypeError: val is not a function // because val is not a function it is a number
// so we can use this way to solve this issue =>
var val1; // Function is a type in TS
val1 = add;
console.log(printResult(val1(5, 6))); // Result: 11 undefined 
// val1 = 5; // TypeError: val1 is not a function
// specifying the return type of a function
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log('Result: ' + num);
}
function printResult2(num) {
    console.log('Result: ' + num);
    return;
} // instead of undefined we can use void 
console.log(printResult1(add1(5, 12))); // Result: 17 undefined
console.log(printResult2(add1(5, 12))); // Result: 17 undefined
// now batter define the function type like this =>
var val2; // here we define the function type
var val3; // here we define the function type
val2 = add1;
val3 = printResult1;
console.log(val2(5, 6)); // 11
console.log(val3(5)); // Result: 5 undefined
// callback function type and return type
var val4; // here we define the function type
val4 = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
val4(2, 3, function (result) {
    console.log(result);
}); // passing argument as a callback function and values
// or

function printResult3(num) {
    console.log('Result: ' + num);
}
val4(2, 3, printResult3); // passing argument as a callback function and values
