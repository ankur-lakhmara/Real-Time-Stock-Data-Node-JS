const { registerUser } = require("../../services/AuthService/register");

const register = async (req, res) => {
  try {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };

    //call the register service
    const result = await registerUser(userData);

    if (result.success) {
      res.status(201).json({ message: result.message, userId: result.userId });
    } else {
      res.status(400).json({ message: result.message });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = register;
