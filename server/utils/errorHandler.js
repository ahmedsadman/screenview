module.exports = function errorHandler(err, req, res, next) {
  const message = err.message || 'Unhandled error';
  console.log(err, message);
  const data = Object.assign({}, err.data, { message: err.message || message});
  res.status(err.status || 500).json(data);
}
