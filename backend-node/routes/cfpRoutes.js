const express = require("express")
const { createCFP, getAllCFP } = require("../controller/cfpController")
const { verifyToken } = require("../middleware/jwt")

const router = express.Router()

router.post("/createcfp", verifyToken, createCFP)
router.get("/getallcfp", verifyToken, getAllCFP)

module.exports = router