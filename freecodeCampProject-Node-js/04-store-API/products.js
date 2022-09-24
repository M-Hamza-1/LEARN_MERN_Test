const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "product from static" });
};
const getAllProducts = (req , res) =>{
 res.status(200).json({msg : "all products"});

}
module.exports = { getAllProductsStatic, getAllProducts };