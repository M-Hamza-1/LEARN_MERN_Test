const authorized = (req , res ,next) =>{
console.log("user authorized");
req.user = {user : 'john' , id : 22}; // it will used by all routes as req.user 
next();
}
module.exports = authorized;