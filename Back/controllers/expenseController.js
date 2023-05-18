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

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByIdAndDelete(id);

        if (!expense) {
            return res.status(404).json({ msg: `No expense with id: ${id}` });
        } else {
            res.status(200).json({
                status: "success",
                message: `Expense with id: ${id} deleted successfully.`,
                expense: expense,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createNewExpense = async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                expense: newExpense,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.updateExpense = async (req, res) => {
    try {
        const upatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            status: "success",
            data: {
                expense: upatedExpense,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};
