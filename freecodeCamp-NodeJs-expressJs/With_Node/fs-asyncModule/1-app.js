// this async fs modlue

const {readFile , writeFile} = require('fs');
   console.log("start line 2");
// call back function using because of async behavior
readFile("./fs-asyncModule/2-first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
console.log(first ,"line 10");
  readFile("./fs-asyncModule/3-second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
   
    // write the file now and make newfile.txt

    writeFile(`./fs-asyncModule/4-newFile.txt` , `here this is the result : ${first} ,${second}`,(err , result) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task , line 25');
    });


  });
});
console.log("all task are are don with G.E.C  , line 31");
/**
 * start line 2
all task are are don with G.E.C  , line 31
this is the first file of async module we are using call back here line 10
done with this task , line 25

*/
