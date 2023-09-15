const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { __v: 0 });
    console.log("Product Fetched Successfully \n" + products);
    res
      .status(200)
      .json({ message: "Product Fetched Successfully", data: products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const product = await Product.findById(
        { _id: req.params.id },
        { __v: 0 }
      );
      if (!product) {
        console.log("Product Not Found.");
        res.status(404).json({ message: "Product Not Found" });
        return;
      }
      console.log("Product Fetched Successfully \n" + product);
      res
        .status(200)
        .json({ message: "Product Fetched Successfully", data: product });
    } else {
      console.log("Product Id Not Valid.\n");
      res.status(404).json({ message: "Product Id Not Valid" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const product = await Product.deleteOne({ _id: req.params.id });
      console.log("HELLO....");
      console.log(product);

      if (product.deletedCount == 0) {
        console.log("Product Not Found.\n" + product);
        res.status(404).json({ message: "Product Not Found" });
        return;
      }
      console.log("Product Deleted Successfully \n" + product);
      res.status(200).json({
        message: "Product Deleted Successfully",
        data: product,
      });
    } else {
      console.log("Product Id Not Valid.\n");
      res.status(404).json({ message: "Product Id Not Valid" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      if (!product) {
        console.log("Product Not Found.\n" + req.body);
        res.status(404).json({ message: "Product Not Found" });
        return;
      }
      console.log("Product Updated Successfully \n" + req.body);
      res
        .status(200)
        .json({ message: "Product Updated Successfully", data: req.body });
    } else {
      console.log("Product Id Not Valid.\n");
      res.status(404).json({ message: "Product Id Not Valid" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log("Product Added Successfully \n" + product);
    res
      .status(201)
      .json({ message: "Product Added Successfully", data: product });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  addProduct,
};
