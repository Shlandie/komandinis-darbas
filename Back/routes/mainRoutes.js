const express = require("express");
const router = express.Router();

const { User, Expense, Earning } = require("../models/models");

router.get("/expenses", async (req, res) => {
    const allExpenses = await Expense.find({ user: req.user._id });
    console.log(allExpenses);
    res.status(200).json({
        status: "success",
        results: allExpenses.length,
        data: {
            expenses: allExpenses,
        },
    });
})

module.exports = router;