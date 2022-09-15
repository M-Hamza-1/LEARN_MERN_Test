const path  = require('path'); // its build in mdule in NodeJs

const filepath = path.join('/pathModule' , 'subPath' , 'path.txt');
console.log(filepath); // \pathModule\subPath\path.txt


// while need only base path :
const base = path.basename(filepath); // base name is path.txt
console.log(base); //path.txt

// complete absolute path of system and filepath: used to check host machines path

const absolute = path.resolve(__dirname, "/pathModule", "subPath", "path.txt"); // it will return coplete directory of system
console.log(absolute); // m:\pathModule\subPath\path.txt 