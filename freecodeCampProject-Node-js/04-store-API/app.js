const express = require("express");
const app = express();
const connectDB = require("./connectDB/dB");
const errHnadlerMiddleware = require("./Error-middleware/error-handler");
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<h1>Store api <a href="/api/v1/prduction" >/api/v1/prduction</a></h1>`
  );
});


// error handler 

app.use(errHnadlerMiddleware);

const port = 3000;
const start = () => {
  try {
    connectDB();
    console.log("DB connected...");
    app.listen(port, console.log(`Server connected at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();