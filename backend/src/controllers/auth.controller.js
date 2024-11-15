const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "Email already used." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...req.body, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User successfully registered." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
