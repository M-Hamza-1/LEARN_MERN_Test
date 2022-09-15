// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum) whaterver you want export only share that using moudle exports

const sayHi = require("../Modules/2-fun");  
const { age, name } = require("../Modules/3-vaule"); // import this way (as value)
const value = require("../Modules/3-vaule"); // or this way we have option (as an object)
const  itams = require("../Modules/4-wayModule");
require("../Modules/2-requireWay") // the sum is : 15 (file will work like this way as well)
sayHi(name);
sayHi(age);
sayHi(value);
sayHi(value.age);
sayHi(value.name);
sayHi(value.location);
console.log(itams);
