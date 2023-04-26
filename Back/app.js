const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { User, Expense } = require("./models/models");


const mainRouter = require("./routes/mainRouter");

app.use(express.json());

app.use("/", mainRouter);

module.exports = app;