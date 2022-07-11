const express = require("express");
const router = express.Router();

const { customerGuard } = require("../auth/auth");
const { addCart } = require("../controller/cartController");

router.route("/cart/add/:productId").post(customerGuard, addCart);

module.exports = router;
