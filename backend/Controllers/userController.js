const User = require("../model/User");
const transaction = require("../model/transactionModel");

// exports.updateUser = async (req, res, next) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $push: req.body,
//       },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     res.status(201).json({
//       status: "success",
//       //   _id: newtransaction._id,
//       updatedUser,
//       //   message: "order placed successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
exports.getTransactions = async (req, res, next) => {
  try {
    const UserTrasactions = await transaction.find({ userId: req.params.id });
    res.status(201).json({
      status: "success",
      //   _id: newtransaction._id,
      UserTrasactions,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const Users = await User.find();
    res.status(201).json({
      status: "success",
      //   _id: newtransaction._id,
      Users,
    });
  } catch (error) {
    next(error);
  }
};
