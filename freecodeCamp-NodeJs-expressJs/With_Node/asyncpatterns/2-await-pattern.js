const { readFile, writeFile } = require("fs").promises; // using promise like this way on of the method
// const util = require('util')
// const readFilePromise = util.promisify(readFile) // either use promise thsi way
// const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
try {
    const first = await readFile("./fs-asyncModule/2-first.txt" ,"utf8");  // utf8 used for encoding text . readed from 2-first.txt
    const second = await readFile("./fs-asyncModule/3-second.txt" ,"utf8");  
    await writeFile("./fs-asyncModule/4-newFile.txt" ,`This is from async await : ${first} ${second}`);
    console.log(first , second);
} catch (error) {
    console.log(error);
}

}
start();

// another way to use promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))