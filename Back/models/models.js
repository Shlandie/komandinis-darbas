const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
    username: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true
    },

    admin: {
        type: Boolean,
        required: true
    }

});

const expenseSchema = new mongoose.schema({
    category: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    date: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

const User = new mongoose.model("User", userSchema);
const Expense = new mongoose.model("Expense", expenseSchema);

module.exports = { User, Expense };