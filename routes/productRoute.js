const express = require("express");
const router = new express.Router();

const { customerGuard } = require("../auth/auth");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProudcts,
  getProductById,
} = require("../controller/productController");
const imgUpload = require("../upload/imageUpload");

router.get("/mobile/get/:id", getProductById);
router.get("/mobile/all", getAllProudcts);
router.get("/mobile/get/category=:category", getProduct);
router.post("/mobile/add", customerGuard, imgUpload.single("img"), addProduct);
router.put("/mobile/update/:productId", customerGuard, updateProduct);
router.delete("/mobile/delete/:productId", customerGuard, deleteProduct);

module.exports = router;
