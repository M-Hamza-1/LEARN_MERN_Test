 // basic ==>

    // 1. type inference
    
// automatically typescript will infer the type of variable based on the value assigned to it
 // example:
//  let number1 = 5; // here typescript will infer the type of number1 as number because we have assigned a number value to it
//  let number2 = 2.99; // here typescript will infer the type of number2 as number because we have assigned a number value to it
//  let printResult = true; // here typescript will infer the type of printResult as boolean because we have assigned a boolean value to it
//  let resultPhrase = "Result is : "; // here typescript will infer the type of resultPhrase as string because we have assigned a string value to it


let person = {
    name : "Maximilian", // here typescript will infer the type of name as string because we have assigned a string value to it
    age : 30 ,// here typescript will infer the type of age as number because we have assigned a number value to it
    hobbies : ["Sports" , "Cooking"] // here typescript will infer the type of hobbies as array of string because we have assigned a array of string value to it
};

console.log(person.name); 

// !! Type Error !!
// person.hobbies.push(1); // this will give error by typeScript beacuse we decalre as array of string and assign number value to it

// 2. explicit type declaration

// here we can explicitly declare the type of variable
// example:
let number3 : number; // here we have explicitly declared the type of number1 as number
let number4 : number = 5; // here we have explicitly declared the type of number2 as number and assigned a number value to it but this is not required because typescript will infer the type of number2 as number because we have assigned a number value to it
 
 // !! Type Error !!
  // number3 = "x" // this will give error by typeScript beacuse we decalre as number and assign string value to it

  