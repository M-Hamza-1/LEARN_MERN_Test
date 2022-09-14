
const fs = require("fs");
for (let i = 0; i < 100000; i++) {
  fs.writeFileSync("./Files/BigFile.txt", `hello world i am new BigFile ${i}\n`, { flag: "a" });
}
// this file made for Streams to read huge data. now BigFile.txt size is 7mb 