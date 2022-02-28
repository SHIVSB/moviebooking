const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../utils/authentication");
let router = express.Router();

router.get("/getCouponCode", authController.authMiddleware, userController.getCouponCode);
router.post("/signup", userController.signup);
router.post("/login", userController.signin);
router.post("/logout", userController.logout);

module.exports = router;
