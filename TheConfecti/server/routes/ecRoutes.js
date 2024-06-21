const express = require("express")
const { login_ec, createReviewer } = require("../controller/ecController")
const { verifyToken } = require("../middleware/jwt")

const router = express.Router()

router.post("/eclogin", login_ec)
router.post("/createreviewer", verifyToken, createReviewer)

module.exports = router