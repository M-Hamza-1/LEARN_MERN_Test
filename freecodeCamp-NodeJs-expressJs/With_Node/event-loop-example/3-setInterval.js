setInterval(() =>{
    console.log("hello world this is line 2"); // task always goes in event loop
},2000)

console.log("This line 5"); 
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error