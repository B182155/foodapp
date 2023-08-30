require("../helpers/inti_mongo");

const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");

const transactionSchema = new mongoose.Schema({
  cartitems: {
    type: Array,
  },
  totalAmount: Number,
});

const transaction = mongoose.model("transaction", transactionSchema);

module.exports = transaction;
