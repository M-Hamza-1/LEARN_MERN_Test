const logger = (req, res, next) => {
  console.log("logger hits");
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // send the controle to next function
};
module.exports = logger