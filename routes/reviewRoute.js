const express = require("express");
const router = express.Router();
const { customerGuard } = require("../auth/auth");

const { addReview, getBookReviews } = require("../controller/reviewController");

router.route("/review/add/:productId").post(customerGuard, addReview);

router.route("/reviews/get/book/:productId").get(customerGuard, getBookReviews);

module.exports = router;
