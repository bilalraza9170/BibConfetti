const express = require("express")
const cors = require('cors');
const { register, login, logout} = require("../controller/coAuth")

const router = express.Router()

// Enable CORS for specific routes
router.use(cors({
    origin: "localhost:3000",
    credentials: true
}));

router.post("/coregister", register)
router.post("/cologin", login)
router.post("/logout", logout)

module.exports = router