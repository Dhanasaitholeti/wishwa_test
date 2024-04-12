const generateResponse = (sucess, message, data) => {
  return {
    sucess,
    message,
    data: data ? data : null,
  };
};

module.exports = {
  generateResponse,
};
