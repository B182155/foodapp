const AppError = require("../helpers/AppError");

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("ERROR 🔥", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

// const handleDuplicationFieldsDB = (err) => {
//   // // const value = msg.match(/(["']*)/);
//   // console.log(err);
//   const { email } = err.keyValue;
//   // console.log(email);

//   message = `Duplicate field ${email}`;
//   return new AppError(message, 400);
// };

// const handleValidationErrorDB = (err) => {
//   // console.log("shiva");
//   const errors = Object.values(err.errors).map((el) => el.message);

//   const message = `Invalid input data ${errors.join(" , ")}`;

//   return new AppError(message, 400);
// };

module.exports = (err, req, res, next) => {
  // console.log(err);
  // console.log(res);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // console.log(err.errors);
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    // let error = { ...err };
    // // console.log(error);

    // // if (error.name === "CastError") error = handleCastErrorDB(error);

    // if (error.code === 11000) error = handleDuplicationFieldsDB(error);

    // // if (error.name === "ValidationError")
    // //   error = handleValidationErrorDB(error);

    sendErrorProd(err, res);
  }
};
