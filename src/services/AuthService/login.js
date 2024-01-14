const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });

    if (!user) {
      return { success: false, message: "User not found" };
    }

    //compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(userData.password, user.password);
    if (!isMatch) {
      return { success: false, message: "Invalid password" };
    }

    //generating JWT
    const payload = {
      userId: user._id,
    };
    const secretKey = process.env.JWT_SECRET;
    const options = {
      expiresIn: "5d",
    };
    const token = jwt.sign(payload, secretKey, options);
    return {
      success: true,
      message: "User loged in successfully",
      userId: user._id,
      token,
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
};
module.exports = { loginUser };
