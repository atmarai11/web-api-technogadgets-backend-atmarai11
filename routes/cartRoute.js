const express = require("express");
const router = express.Router();

const { customerGuard } = require("../auth/auth");
const { addCart, getCart } = require("../controller/cartController");

router.route("/cart/add/:productId").post(customerGuard, addCart);
router.route("/cart/getAll").get(customerGuard, getCart);

module.exports = router;
