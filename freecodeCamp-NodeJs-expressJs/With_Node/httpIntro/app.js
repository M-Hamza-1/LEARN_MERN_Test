const http = require('http');
// this is http module from Node js . using call back here
const server = http.createServer((req,res) =>{
  if(req.url ==='/'){
    res.end(`
    <h1 style ="color : red">Welcome to home page</h1>`);
  }
 else if(req.url === '/about'){
    res.end("This is about page");
  } else{
    res.end(`
    <h1>OOps Snap 404 !</h1>
    <p>We can't find your page</p>
    <a href ="/">Home Page</a>
    `)
  }

})

// listening at 3000
server.listen(3000, function(){
    console.log("Server start at port 3000");
});

