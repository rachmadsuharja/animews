const ResponseError = require("../errors/response");

const errorHandler = async (err, req, res, next) => {
  if (!err) {
    return next();
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    res.status(500).json({
      errors: err.message,
    });
  }
};

module.exports = errorHandler;
