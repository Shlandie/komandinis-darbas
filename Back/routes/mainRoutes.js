const express = require("express");
const router = express.Router();

const { User, Expense, Earning, Budget } = require("../models/models");

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
    
    const allBudget = await Budget.find({ user: req.user._id });
    console.log(allBudget);
    res.status(200).json({
        status: "success",
        results: allBudget.length,
        data: {
            expenses: allBudget,
        },
    });
})

module.exports = router;