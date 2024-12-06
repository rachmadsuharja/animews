const {
  RegisterUserValidation,
  LoginUserValidation,
} = require("../validation/user.validation");
const validator = require("../validation/validator");
const User = require("../models/user");
const ResponseError = require("../errors/response");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomAvatar = require("../utils/randomAvatar");

const register = async (request) => {
  const validatedUser = validator(RegisterUserValidation, request);
  const { username, fullName, email, password, gender } = validatedUser;

  const isExists = await User.findOne({ email });
  if (isExists) {
    throw new ResponseError(400, { email: "This email already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    fullName,
    email,
    password: hashedPassword,
    gender,
    avatar: randomAvatar(gender),
  });
  await user.save();

  return user;
};

const login = async (request) => {
  const validatedUser = validator(LoginUserValidation, request);
  const { email, password } = validatedUser;
  const user = await User.findOne({ email });

  if (!user) {
    throw new ResponseError(400, {
      email: "Please enter a valid email address.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ResponseError(400, {
      password: "Incorrect password.",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

module.exports = { register, login };
