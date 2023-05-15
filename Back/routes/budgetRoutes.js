const express = require("express");
const router = express.Router();

const { getAllBudget } = require("../controllers/budgetController");

router.route("/").get(getAllBudget);

module.exports = router;