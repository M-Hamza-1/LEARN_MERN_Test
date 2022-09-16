const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware (this  static midlleware render all page from public folder  html page src page as well and send resposne)
app.use(express.static("./public"));

// now no all work done by app.use(express.static('./public')); afetr pittinh html file also in public folder
// app.get('/', (req, res) =>{
//   res.sendFile(path.resolve(__dirname, "./NavProject/index.html")); // using this path of index.html (css and js not loaded) untill  express.static('./public' not use
// })

app.all("*", (req, res) => {
  res.status(404).send("<h1 style ='color : red'>404 page not found</h1>");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
