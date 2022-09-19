const express = require("express");
const app = express();

// req=> middleware => res
// user define middleware :
const logger = (req , res ,next) =>{
    console.log("logger hits");
const method  = req.method;
const url = req.url;
const time  = new Date().getFullYear();
console.log(method , url, time);
next(); // send the controle to next function

}

app.get("/" , logger ,(req, res) =>{
res.send("Home page");

})

app.get("/about" , logger , (req , res)=>{
 res.send("About page");
})
app.listen(5000 , ()=>{
    console.log(`Server is listening on port 5000...`);
})