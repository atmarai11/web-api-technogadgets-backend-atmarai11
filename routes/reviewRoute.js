const express = require("express");
const router = express.Router();
const { customerGuard } = require("../auth/auth");

const {
  addReview,
  getBookReviews,
  getUserReviews,
} = require("../controller/reviewController");

router.route("/review/add/:productId").post(customerGuard, addReview);

router.route("/reviews/get/book/:productId").get(customerGuard, getBookReviews);

router.route("/reviews/get/user").get(customerGuard, getUserReviews);

module.exports = router;
