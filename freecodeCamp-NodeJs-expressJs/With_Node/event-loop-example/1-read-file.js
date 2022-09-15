const fs = require('fs');
console.log("Started first task");
fs.readFile("./fs-asyncModule/2-first.txt", "utf8" , (err , result) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(result , "this is from file.txt");
    console.log("first task is completed");
});
console.log("all task are end here");
/**
  Started first task
  all task are end here
  this is the first file of async module we are using call back here
  first task is completed
  
 */