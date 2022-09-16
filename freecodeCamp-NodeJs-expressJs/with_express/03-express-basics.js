const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("user hit the about resource");
  res.status(200).send("About page");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>404 page not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
// methods given by express =>
// app.get
// app.post
// app.put
// app.delete
// app.all // used for all type request
// app.use // this is middleware
// app.listen
