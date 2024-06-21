const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const router = express.Router();
const {
  createSubmission,
  addDescriptionAndDocument,
  addComment,
  updateStatus,
  getDetailsByCFPid,
} = require("../controller/submission");

router.post("/create", verifyToken, createSubmission);
router.put("/add-description/:id", verifyToken, addDescriptionAndDocument);
router.put("/add-comment/:id", verifyToken, addComment);
router.put("/update-status/:id", verifyToken, updateStatus);
router.get("/details/:CFPid", verifyToken, getDetailsByCFPid);

module.exports = router;
