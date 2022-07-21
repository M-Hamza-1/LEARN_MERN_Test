// var type variable
// var x ="hello var";              // x has global level scope
//     x=2; 
//     alert("x=" +  x);

// var has function level scope
  // function hello() {
  //   var y = "hello function";
  // }
  // hello();
  // alert(y); 
   // it will give error becuse y hello function level scope only

   // in var re -declartion is possible with the same name
  //  var x =" i am new x now";  // the x is alerdy decleard in program . there for var is not good at here
  //  alert(x);



   // --------------------------------------- Hosting of var ---------------------------------------------\\

   // hosting  js machnism where variable and function decration  moved at top from their scope before code exicution.
  //  console.log(greetings); // in var it will give error
  //  var greetings ="hello var";


   /* this code treat like this at interpretaion time -->

    var greeting;
    console.log(greetings);  // this is undefined
    var greeting = "hello var";

    */
   //----------------------------------------------------------------------------------------------------------------\\


   //----------------------------------------------------------let -----------------------------------------------------\\

   // var has some issue the in ES6 const and let come into picture \\

   // let is {} block scpoed

//    let value1 = "hello let";
//    if(true){
//     let value2 = "hello i am if block"; // this is if block let
//   console.log(value); // hello i am if block
//    }
//  console.log(value1); // hello let
//  console.log(value2); // ReferenceError: value is not defined

// let can't be redecalre with same name varibale -->

// let name =" devesh";
//  name = "mehra"; reintializtion possible
// let name ="mehra"; // SyntaxError: Identifier 'name' has already been declared
      

// ----------------------------------------- Hosting of let ---------------------------------------\\
//  hosting  js machnism where variable and function decration  moved at top from their scope before code exicution.
// console.log(greeting);
// let greeting ="let hosting example"; // ReferenceError: Cannot access 'greeting' before initialization but gives undeinded here 


//   -------------------------------------------------- Const ------------------------------------------------------------\\

// intilization and declartion must be at same time || once definde never  can be change..

// const name ; // SyntaxError: Missing initializer in const declaration

// const  name  =" devesh ";
// console.log(name);  // hello
// name = "mehra";    //TypeError: Assignment to constant variable.

// const obj ={
//   name : "devesh",
//   age : 36,
// };
// obj.name ="mehra"; // this is possible
// console.log(obj); // { name: 'mehra', age: 36 }


