// here index.html also moved in public folder now all data will render from public with express.static dynamically
const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware 
app.use(express.static("./public"));


app.all("*", (req, res) => {
  res.status(404).send("<h1 style ='color : red'>404 page not found</h1>");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
