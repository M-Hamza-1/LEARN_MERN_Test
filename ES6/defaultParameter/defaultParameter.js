// default parameter when there is no actual arguments passed in funtion while its called. 

function fun(msg){
    console.log(msg);
}
//  no argumenets passed here
fun();  // undefined

/* In a function, a parameter is not provided, then its value becomes undefined.
 In this case, the default value that we specify is applied by the compiler.
*/
                      // deafault parameter
function fun2(msg = "hello using deafault parameter") {
  
  if (msg != undefined) {
    console.log(msg);
  }
}
fun2(); // output : hello ( using deafault parameter)

fun2("Its paased by value"); // output : Its paased by value


// we also use deafualt parameter like this =>
                 // deafualt parameter is num2
function sqaure(num , num2= num*num){
    console.log(num + " square is =" + num2);  
  
}
sqaure(8); // Output : 8 square is =64



