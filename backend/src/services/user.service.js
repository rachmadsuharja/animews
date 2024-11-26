const { RegisterUserValidation } = require("../validation/user.validation");
const validator = require("../validation/validator");
const User = require("../models/user");
const ResponseError = require("../errors/response");

const register = async (request) => {
  const validatedUser = validator(RegisterUserValidation, request);
  const { fullName, email, password } = validatedUser;

  const isExists = await User.findOne({ email });
  if (isExists) {
    throw new ResponseError(400, "Email already registered.");
  }

  const user = new User({ fullName, email, password });
  await user.save();

  return user;
};

module.exports = { register };
