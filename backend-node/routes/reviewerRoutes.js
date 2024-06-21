const express = require("express")
const { login_r } = require("../controller/reviewerController")
const { verifyToken } = require("../middleware/jwt")

const router = express.Router()

router.post("/rlogin", login_r)

module.exports = router