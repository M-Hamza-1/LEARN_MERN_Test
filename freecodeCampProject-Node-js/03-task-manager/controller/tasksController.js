
const getController = (req, res) => {
  res.send("this is home page");
};

const createController =(req , res) =>{
 res.send(req.body);
 console.log(req.body);
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

