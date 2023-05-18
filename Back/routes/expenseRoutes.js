const express = require("express");
const router = express.Router();

const { getAllExpenses, deleteExpense, createNewExpense, updateExpense } = require("../controllers/expenseController");

router.route("/").get(getAllExpenses);
router.route("/:id").delete(deleteExpense);
router.route("/").post(createNewExpense);
router.route("/:id").patch(updateExpense);

module.exports = router;