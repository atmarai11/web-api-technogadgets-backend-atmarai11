const express = require("express");
const router = express.Router();
const { customerGuard } = require("../auth/auth");

const {
  addReview,
  getMobileReviews,
  getUserReviews,
  deleteReview,
  updateReview,
} = require("../controller/reviewController");

router.route("/reviews/get/mobile/:productId").get(customerGuard, getMobileReviews);
router.route("/review/add/:productId").post(customerGuard, addReview);
router.route("/reviews/get/user").get(customerGuard, getUserReviews);
router.route("/reviews/update/:id").put(customerGuard, updateReview);
router.route("/reviews/delete/:id").delete(customerGuard, deleteReview);

module.exports = router;
