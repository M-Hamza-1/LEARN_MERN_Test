// params are the property of req object in whatever passed with route as parameter . params contain it. eg : req.params.name ( name is property with route)
const express = require("express");
const app = express();
const { products } = require("../json-data");

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1> <a href ="/api/products">Get products</a>');
  res.end();
});
// if we don't want send description from object array
let count = 0;
app.get("/api/products", (req, res) => {
  // get values using map function except decription.
  const newProduct = products.map((Element) => {
    const { id, name, image } = Element;
    return { id, name, image };
  });
  res.json(newProduct);
});

//  using params in route for getting spesific data from server eg passing user name user id /product id / review id so on
app.get("/api/products/:productID", (req, res) => {
  // find data using id with find() functionn  :
  const productId = req.params.productID;
  // const singleProduct = products.find((product) => product.id === Number(productID) // this line same as line 26 this is with arrow function
  const singleProduct = products.find(function (obj) {
    
    if (obj.id === Number(productId)) return obj.id; // here productId is str converting to num for compare with id
  });
  console.log(singleProduct);
  if (!singleProduct) {
    res.status(404).send("Product Does Not Exist..");
  }
 
  res.json(singleProduct);
});

// using params route be like :
app.get("/api/products/:productID/review/reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world this review route");
});
// query string :route eg => http://hn.algolia.com/api/v1/search?query=foo&tags=story // afetr ? all value conatin in query
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});



app.listen(5000, () => {
  console.log("server listening on port 5000...");
});


