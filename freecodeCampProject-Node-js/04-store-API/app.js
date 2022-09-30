const express = require("express");
const app = express();
const connectDB = require("./connectDB/dB");
const errHnadlerMiddleware = require("./Error-middleware/error-handler");
const getProductsRoute = require("./route/productRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<h1>Store api <a href="/api/v1/production" >/api/v1/prduction</a></h1>`
  );
});

app.use("/api/v1/products", getProductsRoute);
// error handler 

app.use(errHnadlerMiddleware);


const port = process.env.PORT || 3000;
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