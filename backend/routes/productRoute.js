const express = require("express");

const { getAllProducts, createProduct, updateProducts, deleteProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();


router.route("/products").get(isAuthenticatedUser, getAllProducts);

router.route("/products/new").post(createProduct);

router.route("/product/:id").put(updateProducts).delete(deleteProduct);

module.exports = router


