// core type

// 1 Number : 1, 5.3, -10 any kind of number , no diference between integer or float
// eg: 
function add(n1: number, n2: number) {
    return n1 + n2;
}

let number1: number;
const number2 = 2;
number1 = 5; // only number can be assigned to number1

console.log(add(number1, number2)); // 7


// 2 String : 'Hi', "Hi", `Hi` all text values
// eg:

function authenication(userName: string, password: string) {
    if (userName === 'admin' && typeof password === 'string') {
        return userName + " " + "is logged in";
    }

    return "Invalid username or password";
}

let userName = 'admin';
let password: string;
password = '123admin';
console.log(authenication(userName, password)); // admin is logged in


// 3 Boolean : true or false { 0 or 1 } no "truthy" or "falsy" values like in JS eg: 0, 1, '0', '1', 'true', 'false'
// eg:
function hasValue(value: boolean) {
    return value;
}

let value1: boolean;

// !! Type error !!
// value1 = 1; // Type '1' is not assignable to type 'boolean'. ts(2322) only true or false can be assigned to boolean no thruthy or falsy values are allowed

value1 = true;
console.log(hasValue(value1)); // true


// 4 Object : {age: 30} any JS object, more specific types (type of object)

// eg:
function printEmployeeInfo(emp: { name: string, age: number }) {
    console.log(emp.name + " " + emp.age);
}

let employee = {
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


// Object with type alias
type Employee = {
    name: string;
    age: number;
};

function printEmployeeInfo2(emp: Employee) {
    console.log(emp.name + " " + emp.age);
}


// 5 Array : [1, 2, 3]   any JS array, type can be flexible or strict (regarding the element types) eg  [1, 2, 3] or ['a', 'b', 'c'] or [1, 'a', true] or any other combination

// eg:
function printArray(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toUpperCase()); //  TS knows that arr[i] is a string
    }
}

let arr = ['a', 'b', 'c'];  // all elements in the array should be string
// or let arr: string[] = ['a', 'b', 'c']
printArray(arr); // A B C


// 6 Tuple : [1, 2] added by TS: Fixed-length array with fixed types

// eg:
function printTuple(tup: [number, string]) {
    console.log(tup[0]);
    console.log(tup[1]);


}

let tupleArr: [number, string];
tupleArr = [1, 'Max'];
// !! Type error !!
//  tupleArr = ['Max', 1]; // Type 'string' is not assignable to type 'number'. becuase 0th index should be number and 1st index should be string
// tupleAr[2] = 'abc'; // !! Type error !! size of the tuple is fixed only 2 elements can be added to the tuple

// !! exception !!
tupleArr.push('abc'); // no error because push is an exception for tuple


printTuple(tupleArr); // 1 Max



// 7 Enum : enum { NEW, OLD } added by TS: Automatically enumerated global constant identifiers enum easy to assign friendly names to set of values

// eg: 
enum Role { ADMIN, READ_ONLY, AUTHOR }; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2 // default values are 0, 1, 2 but we can assign our own values
// or enum Role {ADMIN = "ADMIN", READ_ONLY = true, AUTHOR = 1}; // we can assign our own values to the enum

const person = {
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
let value: any; // * avoid *
value = 5;
value = 'Max';
value = true;
console.log(value); // true // same as JS


// 9 Union :  union allows us to combine different types in one type eg: let value: number | string; value = 5; value = 'Max'; value = true; // !! Type error !! Type 'true' is not assignable to type 'string | number'. ts(2322) // same as JS

// eg:
let value2: number | string; // union allows us to combine different types in one type
value2 = 5;
value2 = 'Max';
// value2 = true; // !! Type error !! Type 'true' is not assignable to type 'string | number'. ts(2322)

console.log(value2); // Max // same as JS

// with function
function combine(value1: number | String, value2: number | String | boolean) {

    let result;
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        result = value1 + value2;
    } else if (typeof value1 === 'number' && typeof value2 === 'boolean') {
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





function combine2(val1: number | String, val2: number | String, resultType: "as-string" | "as-number") {

    if (typeof val1 === "number" && typeof val2 === "number" && resultType === "as-number") {

        return val1 + val2;

    } else if (typeof val2 === "number" && typeof val1 === "string" && resultType === "as-string") {
        return +val2 + val1;
    } else {
        return val1.toString() + val2.toString();
    }
}

console.log(combine2("hello", 2, "as-number")); // 2hello
console.log(combine2("hello", 2, "as-string")); // hello2
console.log(combine2(1, 2, "as-number")); // 3
console.log(combine2("hello", "world", "as-string")); // helloworld

// type alias => type alias is a custom type that we can define ourselves using the type keyword

type Combinable = number | string; // type alias
type ConversionDescriptor = "as-number" | "as-string"; // type alias with literal types


function combine3(val1: Combinable, val2: Combinable, resultType: ConversionDescriptor) {

    if (typeof val1 === "number" && typeof val2 === "number" && resultType === "as-number") {

        return val1 + val2;

    } else if (typeof val2 === "number" && typeof val1 === "string" && resultType === "as-string") {
        return +val2 + val1;
    } else {
        return val1.toString() + val2.toString();
    }
}

console.log(combine3("hello", 2, "as-number")); // 2hello
console.log(combine3("hello", 2, "as-string")); // hello2
console.log(combine3(1, 2, "as-number")); // 3

// console.log(combine3("hello" , "world" , "as-string")); // !! Type error !! Argument of type '"as-string"' is not assignable to parameter of type 'ConversionDescriptor'.ts(2345) // helloworld





// unknown type => unknown is a type that is more restrictive than any means . means it is more strict than any type


let userInput: unknown;
let userName1: string;

userInput = 5;
userInput = "Max";
userName1 = userInput; // !! Type error !! Type 'unknown' is not assignable to type 'string'.ts(2322) . it can be assigned to any type but not to string or number or boolean or any other type

// but in any type it is possible
let userInput2: any;
let userName2: string;

userInput2 = 5;

userName2 = userInput2; // no error in any type


