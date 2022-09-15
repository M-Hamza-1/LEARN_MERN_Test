const http = require('http');
const fs  = require('fs');

const server = http.createServer(function (req , res){
//    const text = fs.readFileSync('./Files/BigFile.txt', 'utf8')
//   res.end(text)
// }) // instead of sending this huge readbale file res it as chunks of writable file using pipe() method

const fileStream = 
fs.createReadStream('./Files/BigFile.txt' , 'utf8');
fileStream.on('open',() =>{
  fileStream.pipe(res); //  fileStream.pipe() readble to writable formate in chunks
})
});
server.listen(5000 , ()=>{
    console.log("server started at 5000");
})