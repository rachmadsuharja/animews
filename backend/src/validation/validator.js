const ResponseError = require("../errors/response");

const validator = (schema, request) => {
  const result = schema.validate(request);

  if (result.error) {
    throw new ResponseError(400, result.error.message);
  }

  return result.value;
};

module.exports = validator;
