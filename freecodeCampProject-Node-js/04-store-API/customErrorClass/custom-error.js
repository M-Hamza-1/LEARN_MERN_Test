class customApiError extends Error{
constructor(message , statusCode){
    super(message);
    this.statusCode = statusCode
}
}
const createCustomError  =(msg , statausCode) =>{
  return new customApiError(msg, statausCode); // making new instance of customApiError class using createCustomError function
}

module.exports = {createCustomError , customApiError};