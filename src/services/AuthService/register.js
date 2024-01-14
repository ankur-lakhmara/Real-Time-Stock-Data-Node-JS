const User = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRound = 10;

module.exports.registerUser = async (userData) => {
  try {
    const { firstName, lastName, email, password } = userData;

    //checking for email existance
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User is already exist!");
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRound);

    //create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return {
      success: true,
      message: "User registred successfully!",
      userId: newUser._id,
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
};
