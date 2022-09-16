const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware (this  static midlleware render all page from public folder  those are available as html ref at the time of parsig)
app.use(express.static("./public"));


app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, "./NavProject/index.html")); // using this path of index.html (css and js not loaded) untill  express.static('./public') not use
})

app.all("*", (req, res) => {
  res.status(404).send("<h1 style ='color : red'>404 page not found</h1>");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
