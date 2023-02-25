// here we learn : 
  // req objects property url 
  // how to response data 
  // header : Meta data
      // status code , content-type , Mime-type
const http = require("http");


const server = http.createServer((req, res) => {
  const url = req.url;
  // home page (route)
  if (url == "/") {
    //Mime type
    res.writeHead(200, { "content-type": "text/html" }); // setting header META data (status code , type of content : MIME type )
    res.write("<h1>Home page</h1>"); // sending response as html type content
    res.end(); // disconnecting the connection
  }
  // about page (route come into req objects property url)
  else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }

  // example of 404 error 
   else{
    res.writeHead(404, { 'content-type': 'text/html'})
    res.write(`<h1 style ="color :red">404 page not found</h1>`)
    res.end();
   } 
})
server.listen(5000);
