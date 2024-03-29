const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
