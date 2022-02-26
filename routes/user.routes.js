const express = require("express");
const userController = require("../controllers/user.controller");
let router = express.Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/logout", userController.logout);

module.exports = router;
