const mongoose = require('mongoose');
const DB_LINK = require("../secret")

const connectDB = () =>{
return mongoose.connect(DB_LINK)
}


module.exports = connectDB;