const express = require("express");
const {
  createCFP,
  getAllCFP,
  getCFPById,
} = require("../controller/cfpController");
const { verifyToken } = require("../middleware/jwt");

const router = express.Router();

router.post("/createcfp", verifyToken, createCFP);
router.get("/getallcfp", verifyToken, getAllCFP);
router.get("/cfp/:id", verifyToken, getCFPById);

module.exports = router;
