const express = require('express');
const app = express();
const logger = require('./middleware/01-logger');
const authorized = require('./middleware/02-authorized');

// use all middleware or path gloabbly in any route automaticllay with the help of app.use

app.use([logger , authorized]); // now both middleware will used automaticllay 

app.get('/' , (req , res) =>{
   res.send("home");
})
app.get("/about" , (req, res) =>{
    res.send("About");

})
app.get('/api/user' ,(req , res) =>{
res.send(req.user);
})

app.listen(5000, () =>{
    console.log("Hello this is server port 5000");
})