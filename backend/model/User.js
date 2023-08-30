require("../helpers/inti_mongo");

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// const transactionSchema = new mongoose.Schema({
//   cartitems: {
//     type: Array,
//   },
//   totalAmount: Number,
// });

// const transaction = mongoose.model("transaction", transactionSchema);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a username"],
    // unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "A user must have a email"],

    lowercase: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "user must confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  // transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "transaction" }],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  currentPassword,
  userPassword
) {
  return await bcrypt.compare(currentPassword, userPassword);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
// module.exports = transaction;
