const { Expense } = require("../models/models");

exports.getAllExpenses = async (req, res) => {
    try {
        const allExpenses = await Expense.find();
        res.status(200).json({
            status: "success",
            results: allExpenses.length,
            data: {
                expenses: allExpenses,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};
