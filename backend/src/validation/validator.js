const ResponseError = require("../errors/response");

const validator = (schema, request) => {
  const result = schema.validate(request);

  if (result.error) {
    const errors = {};
    result.error.details.forEach((detail) => {
      errors[detail.path] = detail.message;
    });
    throw new ResponseError(400, errors);
  }

  return result.value;
};

module.exports = validator;
