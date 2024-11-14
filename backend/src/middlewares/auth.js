const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header(`x-auth-token`);

  if (!token) return res.status(401).json({ message: "Authorization Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = auth;
