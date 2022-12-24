const setRequestBody = (req, res, next) => {
  var input = JSON.parse(req.body.data);

  req.body.data = input; // solution this line
  next();
};

export default setRequestBody;
