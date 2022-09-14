const EventEmitter = require("events"); // invoking a class

 const customEmitter = new EventEmitter(); // making  a instance of EventEmitter class
// customEmitter.emit("response", mr - smilga, 34); // this will not give any outcome because. ye event listen hone se pehle use kiya ja rha hai.
customEmitter.on("response" ,(name ,id) =>{
  console.log(`data recieved user ${name} with id:${id}`); // on is the one of the method of events module it used for to listen to events. here response is the event
})
customEmitter.on('response' , ()=>{
    console.log("this is some other logic here");
})
customEmitter.emit("response", 'mr-smilga', 34); // emit(), used for use to commincate Global and whatever change occures make it in action
