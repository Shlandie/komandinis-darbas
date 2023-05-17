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

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteExpense = await Expense.findByIdAndDelete(id);

        if (!deleteExpense) {
            return res.status(404).json({ msg: `No expense with id: ${id}` });
        } else {
            res.status(200).json({
                status: "success",
                message: `Expense with id: ${id} deleted successfully.`,
                expense: deleteExpense,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
