const http = require('http');
const {readFileSync} = require('fs');

// getting the all file for res to client of Nav-app
const homePage = readFileSync("./NavProject/index.html");
const homeStyles = readFileSync("./NavProject/style.css");
const homeImage = readFileSync("./NavProject/logo.svg");
const homeLogic = readFileSync("./NavProject/app.js");

const server = http.createServer((req ,res) =>{

    const url = req.url;
    // home page :
    if(url =='/'){
   res.writeHead(200 , {'content-type' : 'text/html'})
   res.write(homePage);
   res.end();
   // about route 
} else if(url === '/about'){
    res.writeHead(200, { "content-type": "text/plain" }); // here Mime type is plan whaterver kinda data swe send to clint using this rout it will convert plain text auto matically
    res.write("<h1>about page</h1>");
    res.end();
    // req for styles 
} else if(url == '/style.css'){ // req occures autmatically from our res homePage when render in browser at the time of parrsing '/styles.css' and '/logo.svg' '/browser-app.js' will counter
     res.writeHead(200, { "content-type": "text/css" });
     res.write(homeStyles);
     res.end();
     // req for javaScript
} else if (url === "/app.js") {
  res.writeHead(200, { "content-type": "text/javascript" });
  res.write(homeLogic);
  res.end();
}
// log svg
else if (url === "/logo.svg") {
  res.writeHead(200, { "content-type": "image/svg+xml" });
  res.write(homeImage);
  res.end();
}
// 404
else {
   res.writeHead(404, { "content-type": "text/html" });
   res.write("<h1>page not found</h1>");
   res.end();
}
})
server.listen(5000 , ()=>{
    console.log("Node server started at port 5000");
})