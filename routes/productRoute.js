const express = require("express");
const router = new express.Router();

const { customerGuard } = require("../auth/auth");
const { addProduct, getProduct } = require("../controller/productController");
const imgUpload = require("../upload/imageUpload");

router.post("/book/add", customerGuard, imgUpload.single("img"), addProduct);

router.get("/book/get/category=:category", getProduct);

module.exports = router;
