const express = require("express");
const router = express.Router();

const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getTransactions);
// router.get("/profile", authController.profile);

// router.patch("/users/:id", userController.updateUser);

module.exports = router;
