// no need to install and path bcz its buil in module of NodeJs
const os = require('os');

// info about current user in system:
const user  = os.userInfo();
console.log(user);

// uptime() this method returns system run time in sec
console.log(`My system up time is ${os.uptime()} in seconds`)

// few other property of the os :
const myOS ={
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    MyFreeMem : os.freemem(),
}
console.log(myOS);
/**
 * {
  name: 'Windows_NT',
  release: '10.0.22000',
  totalMemory: 6387466240,
  MyFreeMem: 1482219520
}

 */