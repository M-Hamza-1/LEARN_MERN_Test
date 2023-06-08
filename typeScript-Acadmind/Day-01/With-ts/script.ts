// this is a typescript file which will be compiled to javascript file and then we will use this javascript file in our html file
// Run this file using command : tsc script.ts 
const button = document.querySelector("button")! as HTMLButtonElement;  // ! is used to tell typescript that this will never be null && as HTMLButtonElement is used to tell typescript that this is a button element and not just an element 
const input1 = document.getElementById("num1")! as HTMLInputElement; // here ! is used to tell typescript that this will never be null && as HTMLInputElement is used to tell typescript that this is an input element and not just an element
const input2  = document.getElementById("num2") ! as HTMLInputElement;

// this is a function which takes two numbers and return their sum it will always take two numbers and return a number
function add(num1 : number , num2 : number){
       return num1 + num2;  // we are not using typecasting here because typescript will automatically infer the return type of this function as number
}

button.addEventListener("click" , function(){
  console.log(add(Number(input1.value) , Number(input2.value)))  // here we are using Number() to convert the string value to number value otherwise tsc will throw an error this is the beauty of typescript it will return an error compile time only unlike javascript which will return an error at runtime
    
})