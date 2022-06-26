const express = require("express");
const router = new express.Router();

const { customerGuard } = require("../auth/auth");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const imgUpload = require("../upload/imageUpload");

router.get("/book/get/category=:category", getProduct);
router.post("/book/add", customerGuard, imgUpload.single("img"), addProduct);
router.put("/book/update/:productId", customerGuard, updateProduct);
router.delete("/book/delete/:productId", customerGuard, deleteProduct);

module.exports = router;
