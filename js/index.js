// document.write("hello world"); // for html home page



//--------------------------------- --------- console API ----------------------- \\

console.log("hello world"); // used in comsole sceen
console.warn("its warning"); // console screen
console.error("this error"); // console screen
console.clear("clear console screen");

//------------------------------------------*****---------------------------------------------------\\






// -----------------------------------Types of Data In js -------------------------- ----------\\

// ----------- String ------------\\

var str = 'hello world';
var char = 'c';
console.log(str);
console.log(char);

// ---------- Numbers -------------\\
var num1 = 1196;
var num2 = 11.990;
console.log(num1);
console.log(num2);

// ----- Objects --------------\\
var marks ={hindi : 80 , english : 40 , maths : 99};
var student ={
                  Name : "Rohit",
                  Roll_number : 7,
                  Email : "RohitSuklaJI@gmail.com",
                  class : "B.tech 4th year",
                  favMovie : ['dhoom 2' , 'rang de basanti' , 'Naruto'],
                  party :  function(){
                    console.log('party');
                  },
                  Marks : {
                    hindi : 10,
                    english :20,
                    biology : 30,

                  }

};
console.log(marks);
console.log(student);
// document.write(student.party);
// document.write(student.Marks.hindi);

//---= booleans ----\\

var first = true;
var second = false;

console.log(first);
console.log(second);

//------------------ Undefinde and null--------------\\
 var x ; // by default undefinde
 var y = undefined;
 var z= null
 
 console.log(x);
 console.log(y);
 console.log(z);



// ----------------- Array --------------\\

var arr = ['hello' , 2, 4 , 4.5 , undefined , true , false];

console.log(arr);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[0]);

//------------------------------------*******------------------------------------------\\

// Write a function to check age limitaion 

function Age(age){
     if(age> 18)
     {
        return true
     }
     else {
        return false
     }
}

var age = 110;
var result = Age(age);
if(result == true){
    console.log("That fella can drnik alchohol");
}
else{
    console.log("hey kid grew up first");
}
//-------------------------------------------*****-----------------------------------------------------\\



// ------------------------------------------- Methods of date-------------------------------------\\

let myDate = new Date(); // creating date object
console.log(myDate);

// gettime() => time in second

console.log(myDate.getTime());

// getfullyear() ==> return year

console.log(myDate.getFullYear());

// getDay ==> days number

console.log(myDate.getDay());

// gethours() ==> retuns hours
console.log(myDate.getHours());

// -----------------------------------------------------------*************------------------------------\\
