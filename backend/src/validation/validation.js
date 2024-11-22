export default validator = (schema, request) => {
  const result = schema.validate(request);

  if (result.error) {
    return result.error;
  } else {
    return result.value;
  }
};
