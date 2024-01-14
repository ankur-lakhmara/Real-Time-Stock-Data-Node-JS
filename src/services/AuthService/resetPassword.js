//will do after creating middleware
const User = require("../../models/user");
const bcrypt = require("bcrypt");

const resetUserPassword = async (userId, oldPassword, newPassword) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    //checking for the password is correct or not
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return { success: false, message: "Incorrect old password" };
    }
    //hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    //updating the new password in the user DB
    user.password = hashedPassword;
    await user.save();
    return { success: true, message: "Password successfully reset" };
  } catch (err) {
    return {
      success: false,
      message: "Error in resetting password !",
      err: err.message,
    };
  }
};

module.exports = { resetUserPassword };
