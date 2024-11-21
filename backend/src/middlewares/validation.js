const Joi = require("joi");

const userSchema = Joi.object({
  fullName: Joi.string().min(3).max(60).required().messages({
    "string.empty": "name is required.",
  }),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

module.exports = { userSchema };
