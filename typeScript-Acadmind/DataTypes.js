// core type
// 1 Number : 1, 5.3, -10 any kind of number , no diference between integer or float
// eg: 
function add(n1, n2) {
    return n1 + n2;
}
var number1;
var number2 = 2;
number1 = 5; // only number can be assigned to number1
console.log(add(number1, number2)); // 7
// 2 String : 'Hi', "Hi", `Hi` all text values
// eg:
function authenication(userName, password) {
    if (userName === 'admin' && typeof password === 'string') {
        return userName + " " + "is logged in";
    }
    return "Invalid username or password";
}
var userName = 'admin';
var password;
password = '123admin';
console.log(authenication(userName, password)); // admin is logged in
// 3 Boolean : true or false { 0 or 1 } no "truthy" or "falsy" values like in JS eg: 0, 1, '0', '1', 'true', 'false'
// eg:
function hasValue(value) {
    return value;
}
var value1;
// !! Type error !!
// value1 = 1; // Type '1' is not assignable to type 'boolean'. ts(2322) only true or false can be assigned to boolean no thruthy or falsy values are allowed
value1 = true;
console.log(hasValue(value1)); // true
// 4 Object : {age: 30} any JS object, more specific types (type of object)
// eg:
function printEmployeeInfo(emp) {
    console.log(emp.name + " " + emp.age);
}
var employee = {
    name: 'Max',
    age: 30
};
// or
//  let employee: {
//     name: string;
//     age: number;
// } = { 
//     name: 'Max',
//     age: 30
// }; // this is also valid
printEmployeeInfo(employee); // Max 30
function printEmployeeInfo2(emp) {
    console.log(emp.name + " " + emp.age);
}
// 5 Array : [1, 2, 3]   any JS array, type can be flexible or strict (regarding the element types) eg  [1, 2, 3] or ['a', 'b', 'c'] or [1, 'a', true] or any other combination
// eg:
function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].toUpperCase()); //  TS knows that arr[i] is a string
    }
}
var arr = ['a', 'b', 'c']; // all elements in the array should be string
// or let arr: string[] = ['a', 'b', 'c']
printArray(arr); // A B C
// 6 Tuple : [1, 2] added by TS: Fixed-length array with fixed types
// eg:
function printTuple(tup) {
    console.log(tup[0]);
    console.log(tup[1]);
}
var tupleArr;
tupleArr = [1, 'Max'];
// !! Type error !!
//  tupleArr = ['Max', 1]; // Type 'string' is not assignable to type 'number'. becuase 0th index should be number and 1st index should be string
// tupleAr[2] = 'abc'; // !! Type error !! size of the tuple is fixed only 2 elements can be added to the tuple
// !! exception !!
tupleArr.push('abc'); // no error because push is an exception for tuple
printTuple(tupleArr); // 1 Max
// 7 Enum : enum { NEW, OLD } added by TS: Automatically enumerated global constant identifiers enum easy to assign friendly names to set of values
// eg: 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2 // default values are 0, 1, 2 but we can assign our own values
// or enum Role {ADMIN = "ADMIN", READ_ONLY = true, AUTHOR = 1}; // we can assign our own values to the enum
var person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//    Role.ADMIN = 2 // !! Type error !! cannot assign value to enum once it is declared Because enum is a constant AND READ_ONLY = true // !! Type error !! cannot assign value to enum once it is declared Because enum is a constant
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
else if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}
else if (person.role === Role.AUTHOR) {
    console.log('is author');
}
// 8 Any : * avoid * any kind of value, no specific type assignment eg: let value: any; value = 5; value = 'Max'; value = true; same as JS
// eg:
var value; // * avoid *
value = 5;
value = 'Max';
value = true;
console.log(value); // true // same as JS
// 9 Union :  union allows us to combine different types in one type eg: let value: number | string; value = 5; value = 'Max'; value = true; // !! Type error !! Type 'true' is not assignable to type 'string | number'. ts(2322) // same as JS
// eg:
var value2; // union allows us to combine different types in one type
value2 = 5;
value2 = 'Max';
// value2 = true; // !! Type error !! Type 'true' is not assignable to type 'string | number'. ts(2322)
console.log(value2); // Max // same as JS
// with function
function combine(value1, value2) {
    var result;
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        result = value1 + value2;
    }
    else if (typeof value1 === 'number' && typeof value2 === 'boolean') {
        result = value1 + +value2;
    }
    else {
        result = value1.toString() + value2.toString();
    }
    return result;
}
console.log(combine(1, true)); // 2
console.log(combine("hello", 3434));
// >>>>>>>>>>>>>>>>>>>>>>>>>  union with literal types <<<<<<<<<<<<<<<<<<<<<<<<<<
// eg: literal types   =>  literal types are types that allow us to specify exact values
// eg:  let resultType = "as-number" | "as-string"; // literal types are types that allow us to specify exact values
function combine2(val1, val2, resultType) {
    if (typeof val1 === "number" && typeof val2 === "number" && resultType === "as-number") {
        return val1 + val2;
    }
    else if (typeof val2 === "number" && typeof val1 === "string" && resultType === "as-string") {
        return +val2 + val1;
    }
    else {
        return val1.toString() + val2.toString();
    }
}
console.log(combine2("hello", 2, "as-number")); // 2hello
console.log(combine2("hello", 2, "as-string")); // hello2
console.log(combine2(1, 2, "as-number")); // 3
console.log(combine2("hello", "world", "as-string")); // helloworld
function combine3(val1, val2, resultType) {
    if (typeof val1 === "number" && typeof val2 === "number" && resultType === "as-number") {
        return val1 + val2;
    }
    else if (typeof val2 === "number" && typeof val1 === "string" && resultType === "as-string") {
        return +val2 + val1;
    }
    else {
        return val1.toString() + val2.toString();
    }
}
console.log(combine3("hello", 2, "as-number")); // 2hello
console.log(combine3("hello", 2, "as-string")); // hello2
console.log(combine3(1, 2, "as-number")); // 3
// console.log(combine3("hello" , "world" , "as-string")); // !! Type error !! Argument of type '"as-string"' is not assignable to parameter of type 'ConversionDescriptor'.ts(2345) // helloworld
