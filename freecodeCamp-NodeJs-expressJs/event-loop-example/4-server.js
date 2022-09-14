const http = require('http');

const server = http.createServer(function(req , res){
    console.log('this is request event by clint');
    res.end("hello world");
})

server.listen(5000, ()=>{
    console.log(`server is listening at port ${5000}`); // event loop always on and listen is port 5000 has any request
})
