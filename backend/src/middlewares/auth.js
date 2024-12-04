const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header(`Authorization`)?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
};

module.exports = auth;
