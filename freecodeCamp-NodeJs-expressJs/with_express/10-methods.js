const express = require('express');
const app = express();
let { people } = require('../json-data');

//import static assets :
app.use(express.static("../methods-public"));
// parse form data : accept data from html from
app.use(express.urlencoded({extended : false}));

// parse json  : expect data from html form

app.use(express.json());

app.get('/api/people' , (req , res) =>{
    console.log();
res.status(200).json({success: true , data : people })
})

app.post('/api/people' , (req ,res) =>{
const {name } = req.body;

if(name){
    return res.status(201).json({ success: true, person: name });
}
 res.status(400).json({ success: false, msg: "please provide name value" });
})


app.post('/login' , (req, res) =>{
const {name} = req.body;
if(!name){
return res.status(401).send('Please provide Credentials')
}
res.status(200).send(`Welcome ${name}`);

})

app.listen(5000 , () =>{
    console.log("Server listening at port 5000...");
})