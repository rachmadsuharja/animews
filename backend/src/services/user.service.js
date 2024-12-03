const { RegisterUserValidation } = require("../validation/user.validation");
const validator = require("../validation/validator");
const User = require("../models/user");
const ResponseError = require("../errors/response");
const bcrypt = require("bcryptjs");

const register = async (request) => {
  const validatedUser = validator(RegisterUserValidation, request);
  const { fullName, email, password } = validatedUser;

  const isExists = await User.findOne({ email });
  if (isExists) {
    throw new ResponseError(400, { email: "User already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ fullName, email, password: hashedPassword });
  await user.save();

  return user;
};

module.exports = { register };
