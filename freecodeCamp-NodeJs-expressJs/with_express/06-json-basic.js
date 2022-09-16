const express = require("express");
const app  = express();

// resposne send to clint as an json data
const { products } = require('../json-data');
app.get('/' , (req, res) =>{
    res.json(products); // sending response as an json data 
     res.end();
})

app.listen(5000, () =>{
    console.log("Server listening on port 5000...");
})