const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("../controllers/productController");

router.get("/getProducts", getProducts);

router.get("/getProduct/:id", getProductById);

router.delete("/deleteProduct/:id", deleteProductById);

router.put("/updateProduct/:id", updateProductById);

router.post("/addProduct", addProduct);

module.exports = router;
