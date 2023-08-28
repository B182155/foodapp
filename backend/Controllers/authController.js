const jwt = require("jsonwebtoken");
const User = require("../model/User");
const AppError = require("../helpers/AppError");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = { ...req.body };

    if (!name || !email || !password || !confirmPassword) {
      return next(new AppError("Please enter all fields", 404));
    }

    if (password !== confirmPassword) {
      return next(new AppError("password mismatch", 409));
    }

    if (email && (await User.findOne({ email }))) {
      return next(new AppError("Email already exists", 409));
    }

    const newUser = await User.create(req.body);

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      next(new AppError("Please provide email and password!", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError(`Incorect email or password`, 401));
    }

    const token = signToken(user._id);

    res.status(201).json({
      status: "success",
      token,
      message: "login successful",
    });
  } catch (error) {
    next(error);
  }
};
