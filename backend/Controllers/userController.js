const User = require("../model/User");

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
