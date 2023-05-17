const express = require("express");
const router = express.Router();

const { getAllExpenses } = require("../controllers/expenseController");

router.route("/").get(getAllExpenses);

module.exports = router;