const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoute");

app.use(express.json());
app.use("/api/v1/tasks", tasks);
const port = 3000;
app.listen(port, console.log(`Server listening at port ${port}`));
