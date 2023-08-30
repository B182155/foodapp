const jwt = require("jsonwebtoken");
const transaction = require("../model/transactionModel");
const User = require("../model/User");
const AppError = require("../helpers/AppError");

exports.transaction = async (req, res, next) => {
  try {
    const newtransaction = await transaction.create(req.body);
    // await User.updateOne();
    res.status(201).json({
      status: "success",
      _id: newtransaction._id,
      message: "order placed successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getalltransactions = async (req, res, next) => {
  try {
    const trasactions = await transaction.find();
    res.status(201).json({
      status: "success",
      //   _id: newtransaction._id,
      trasactions,
      // message: "order placed successfully",
    });
  } catch (error) {
    next(error);
  }
};
