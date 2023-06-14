function add(number1, number2, showResult, phrase) {
    var result = number1 + number2;
    if (showResult) {
        console.log(phrase + result); // here we are using typecasting to convert number to string 
    }
    else {
        return result;
    }
}
var number1 = 5; // infernce type of number1 is 5 because once in const we have assigned a value to it then we cannot change it so typescript will infer the type of number1 as 5 and not as number
var number2 = 2.99; // this is a float value so typescript will infer the type of number2 as number
var printResult = true; // this is a boolean value so typescript will infer the type of printResult as boolean
var resultPhrase = "Result is : "; // this is a string value so typescript will infer the type of resultPhrase as string
add(number1, number2, printResult, resultPhrase);
