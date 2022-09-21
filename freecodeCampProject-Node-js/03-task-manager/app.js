const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoute");
const connectDB= require('./db/connect');
app.use(express.json());



app.use("/api/v1/tasks", tasks);






// server and DB  
const port = 3000;
const start =async () =>{
try{
await connectDB();
app.listen(port, console.log(`Server listening at port ${port}...`));
} catch(err){
    console.log(err);
}
} 
start();
