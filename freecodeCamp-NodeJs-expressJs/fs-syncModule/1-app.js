// this file system module build in node js
const { readFileSync, writeFileSync } = require("fs"); // import values like this else
const fs = require("fs"); // importing this way is another option
const val = fs.readFileSync("./fs-syncModule/file1.txt", "utf-8"); // fs as an obj
console.log(val);
// use this either
const readFile = readFileSync("./fs-syncModule/file2.txt", "utf-8"); // readFileSync() take 2 params one file name to read data and protcol eg utf-8 (given by node it self)

// writeFileSync => pass path name for write data on it and data whatever you want to write
// if file name not avilable then it will make as it is given name :
 writeFileSync(
  "./fs-syncModule/write-file1.txt",
  "Node will make new write-file1 and this text on it "
);
// writeFileSync will make write-file2.txt if not available and data will write on it
const writeFile2 = writeFileSync(`./fs-syncModule/write-file2.txt` , `here is the result :${readFile} ,${val}`);
