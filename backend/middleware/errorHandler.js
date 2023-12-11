const errNotFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`E - Object not found ${req.originalUrl}`);
  next(error);
};

const errHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'E - Fatal error';
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? '🐞' : err.stack,
  });
};

export { errNotFound, errHandler };
