const TaskModel = require("../model/TasksModel");



const getController = (req, res) => {
  res.send("this is home page");
};

const createController =async (req , res) =>{
  try{
  const newTask = await TaskModel.create(req.body);
  res.status(201).json({
  tasks: newTask,
  msg: "new Task is created successfully",
});
  }catch(err){
      res.status(501).json({
      msg : err
    })
  }
}

const getControllerByID = (req, res) => {
  res.send(req.params);
};

const updateContoller =(req , res) =>{
res.send(req.body);
}

const  deleteContoller =(req , res) =>{
res.send(req.params.id);
}

module.exports = {
    getController,
    createController,
    getControllerByID,
    deleteContoller,
    updateContoller
}

