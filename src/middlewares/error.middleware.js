const { generateResponse } = require('../utils/generateResponse');

const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  res.status(500).json(generateResponse(false, err.message));
};

module.exports = errorMiddleware;
