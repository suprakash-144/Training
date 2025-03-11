// not Found

const notFound = (req, res, next) => {
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler

const errorHandler = async (err, req, res, next) => {
  res.status(500).render({
    status: "fail",
    message: err?.message,
  });
};

module.exports = { errorHandler, notFound };
