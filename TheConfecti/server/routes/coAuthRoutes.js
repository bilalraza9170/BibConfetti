const express = require("express");
const { register, login, logout } = require("../controller/coAuth");

const router = express.Router();

router.post("/coregister", register);
router.post("/cologin", login);
router.post("/logout", logout);

module.exports = router;
