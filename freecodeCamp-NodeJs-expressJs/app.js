const express = require('express')
const app = express();
const peopleRoute = require('../freecodeCamp-NodeJs-expressJs/route/route-people')
const authrRoute = require("../freecodeCamp-NodeJs-expressJs/route/route-auth")
app.use(express.static("../methods-public"));
 let { people } = require("./json-data");
 // static assets

 // parse form data
 app.use(express.urlencoded({ extended: false }));
 // parse json
 app.use(express.json());


console.log("hello this is back end");

app.use("/api/people", peopleRoute);
app.use("/login", authrRoute);
// app.get("/api/people");

// app.post("/api/people")

// app.post("/api/postman/people");

// app.post("/login");

// app.put("/api/people/:id");

// app.delete('/api/people/:id'
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
