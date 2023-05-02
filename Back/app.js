const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { User, Expense, Earning } = require("./models/models");


const mainRouter = require("./routes/mainRoutes");

const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});


app.get("/expenses", async (req, res) => {
    const allExpenses = await Expense.find();
    console.log(allExpenses);
    res.status(200).json({
        status: "success",
        results: allExpenses.length,
        data: [
            allExpenses
        ],
    });
})
// app.use("/", mainRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
module.exports = app;