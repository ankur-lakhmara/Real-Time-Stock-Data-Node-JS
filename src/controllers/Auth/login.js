const { loginUser } = require("../../services/AuthService/login");

const login = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const result = await loginUser(userData);
    if (result.success) {
      return res.status(200).json({
        message: result.message,
        token: result.token,
      });
    } else {
      return res.status(400).json({ message: result.message });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = login;
