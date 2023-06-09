const express = require("express");

const { getAllProducts, createProduct, updateProducts } = require("../controllers/productController");

const router = express.Router();


router.route("/products").get(getAllProducts);

router.route("/products/new").post(createProduct);

router.route("/product/:id").put(updateProducts);

module.exports = router


