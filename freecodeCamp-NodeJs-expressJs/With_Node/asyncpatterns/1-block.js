const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  //  post a req of home page and see  in another tab of browser after /about req both will in buffer if about finish then home will get the chance for exciution
  else if (req.url === "/about") {
    // blocking code  // until this line not run other requset will in wait
    for (let i = 0; i < 1000; i++) { // sync loop
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
