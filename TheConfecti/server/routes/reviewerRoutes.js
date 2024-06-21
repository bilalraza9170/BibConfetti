const express = require("express");
const {
  login_r,
  findReviewersByCFPid,
  deleteReviewerById,
} = require("../controller/reviewerController");
const { verifyToken } = require("../middleware/jwt");

const router = express.Router();

router.post("/rlogin", login_r);
router.get("/reviewers/:CFPid", verifyToken, findReviewersByCFPid);
router.delete("/reviewer/:id", verifyToken, deleteReviewerById);

module.exports = router;
