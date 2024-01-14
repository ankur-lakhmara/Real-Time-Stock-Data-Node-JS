const {
  sendForgotPasswordEmail,
  verifyOtpAndUpdatePassword,
} = require("../../services/AuthService/forgotPassword");

//send email for forgot password
const SendforgotPasswordEmailController = async (req, res) => {
  try {
    const email = req.body.email;
    const result = await sendForgotPasswordEmail(email);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//verify the otp and reset password
const verifyOtpAndUpdatePasswordController = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const result = await verifyOtpAndUpdatePassword(email, otp, newPassword);
    console.log(result.success);
    if (result.success) {
      console.log();
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  SendforgotPasswordEmailController,
  verifyOtpAndUpdatePasswordController,
};
