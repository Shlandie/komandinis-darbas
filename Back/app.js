const express = require("express");
const app = express();
const cors = require('cors');

const { User, Expense, Earning } = require("./models/models");

const mainRouter = require("./routes/mainRoutes");
const incomesRouter = require("./routes/incomeRoutes");
const expencesRouter = require("./routes/expenceRoutes");
const budgetRouter = require("./routes/budgetRoutes");

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


app.get("/expenses/:month", async (req, res) => {
    const { month } = req.params;
    const regexp = new RegExp("\\d\\d\\d\\d-" + month + "-\\d\\d");
    console.log(regexp);
    const allExpenses = await Expense.find({ date: { $regex: regexp } });
    const allEarnings = await Earning.find({ date: { $regex: regexp } });
    const allBudget = await Earning.find({ date: { $regex: regexp } });
    console.log(allExpenses);
    res.status(200).json({
        status: "success",
        results: allExpenses.length,
        data: {
            allExpenses,
            allEarnings,
            allBudget
        }
    });
})
// app.use("/", mainRouter);
app.use(cors());

app.use("/api/v1/incomes", incomesRouter);
app.use("/api/v1/expences", expencesRouter);
app.use("/api/v1/budget", budgetRouter);

module.exports = app;