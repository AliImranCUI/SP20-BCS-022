const express = require("express");
const router = express.Router();

const Products = require("../models/productsModel");
router.get("/getallourproducts", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
    console.log("data request");
    console.log(products);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
