const express = require("express");
const router = express.Router();

const registerController = require("../controllers/Auth/register.js");
const loginController = require("../controllers/Auth/login");
const {
  SendforgotPasswordEmailController,
  verifyOtpAndUpdatePasswordController,
} = require("../controllers/Auth/forgotPassword");
const authUserMiddleware = require("../utils/middlewares/AuthMiddleware.js");
const {
  resetPasswordController,
} = require("../controllers/Auth/resetPassword.js");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/send-email-forgot-password", SendforgotPasswordEmailController);
router.post("/verifyOTP", verifyOtpAndUpdatePasswordController);
router.post("/password-reset", authUserMiddleware, resetPasswordController);
module.exports = router;
