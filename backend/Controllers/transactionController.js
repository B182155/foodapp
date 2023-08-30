const jwt = require("jsonwebtoken");
const transaction = require("../model/transactionModel");
const AppError = require("../helpers/AppError");

exports.transaction = async (req, res, next) => {
  try {
    const newtransaction = await transaction.create(req.body);
    res.status(201).json({
      status: "success",
      _id: newtransaction._id,
      message: "order placed successfully",
    });
  } catch (error) {
    next(error);
  }
};
