const User = require("../models/user");
const userService = require("../services/user.service");

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
    const user = await userService.register(req.body);
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
    const token = await userService.login(req.body);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 36000000,
    });

    res.status(200).json({
      message: "You're logged in.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, login, register };
