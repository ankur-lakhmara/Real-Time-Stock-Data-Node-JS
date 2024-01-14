const {
  resetUserPassword,
} = require("../../services/AuthService/resetPassword");

const resetPasswordController = async (req, res) => {
  const userId = req.user.userId;
  const { oldPassword, newPassword } = req.body;

  const result = await resetUserPassword(userId, oldPassword, newPassword);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(400).json({ message: result.message });
  }
};

module.exports = { resetPasswordController };
