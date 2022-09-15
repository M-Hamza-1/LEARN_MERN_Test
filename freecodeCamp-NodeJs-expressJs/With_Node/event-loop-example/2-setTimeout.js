// starting system task
console.log("first");
setTimeout(() =>{ 
    console.log("Second");
},0);
console.log("third"); // ending
/*
first
third
Second
*/
