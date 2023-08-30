const express = require("express");
const router = express.Router();

const transactionController = require("../Controllers/transactionController");

router.post("/transaction", transactionController.transaction);
// router.get("/profile", authController.profile);

module.exports = router;
