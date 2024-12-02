const Joi = require("joi");

const RegisterUserValidation = Joi.object({
  fullName: Joi.string().min(3).max(60).required().messages({
    "string.min": "Name must be at least 3 characters long.",
    "string.max": "Name can't be more than 60 characters long.",
    "string.empty": "Name is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "string.empty": "Email is required.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long.",
    "string.empty": "Password is required.",
  }),
});

module.exports = { RegisterUserValidation };
