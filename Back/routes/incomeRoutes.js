const express = require("express");
const router = express.Router();

const { getAllExpenses } = require("../controllers/incomeController");

router.route("/").get(getAllExpenses);

module.exports = router;