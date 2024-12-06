const User = require("../models/user");
const authService = require("../services/auth.service");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      message: "User successfully registered.",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);

    res.cookie("auth_token", token);

    res.status(200).json({
      message: "You're logged in.",
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("auth_token")
    .status(200)
    .json({ message: "Successfully logged out." });
};

module.exports = { getUsers, register, login, logout };
