const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const createError = require("http-errors");
const cookieParser = require("cookie-parser");

const AppError = require("./helpers/AppError");

const globalErrorHandler = require("./Controllers/errorController");

require("dotenv").config({ path: "./config.env" });

//middle wares

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const corsOptions = {
  origin: ["127.0.0.1:1234"],
  credentials: true,
  optionSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
};

app.use(cors(corsOptions));

//routes
const userRouter = require("./routes/userRoute");

app.use("/api/v1/", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on port no :${port}`);
});
