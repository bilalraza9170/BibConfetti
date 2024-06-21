const express = require("express")
const { register, login, verifyAndUpdate} = require("../controller/researcherController")
const { verifyToken } = require("../middleware/jwt")

const router = express.Router()

router.post("/resregister", register)
router.post("/reslogin", login)
router.post("/joincfp", verifyToken,verifyAndUpdate)

module.exports = router