const express = require("express");
const router = express.Router();

const transactionController = require("../Controllers/transactionController");

router.post("/transaction", transactionController.transaction);
router.get("/transaction", transactionController.getalltransactions);
// router.get("/profile", authController.profile);

// router.get("/transaction",transactionController)

module.exports = router;
