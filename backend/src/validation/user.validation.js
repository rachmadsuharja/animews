const Joi = require("joi");

const RegisterUserValidation = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.alphanum": "Username only contain alphanumeric characters.",
    "string.min": "Username must be at least 3 characters long.",
    "string.max": "Username can't be more than 30 characters long.",
    "string.empty": "Username is required.",
  }),
  fullName: Joi.string().min(3).max(60).required().messages({
    "string.min": "Name must be at least 3 characters long.",
    "string.max": "Name can't be more than 60 characters long.",
    "string.empty": "Name is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "string.empty": "Email address is required.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long.",
    "string.empty": "Password is required.",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Password doesn't match.",
  }),
  gender: Joi.string().valid("male", "female"),
});

const LoginUserValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "string.empty": "Please enter your email address.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Please enter your password.",
  }),
});

module.exports = { RegisterUserValidation, LoginUserValidation };
