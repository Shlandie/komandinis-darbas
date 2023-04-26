const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
    username: {
        type: String,
        minlength: 8,
        required: true
    },


    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(v);
            },
            message: props => `${props.value} password error`
        }
    },

    admin: {
        type: Boolean,
        required: true
    }

});

const expenseSchema = new mongoose.schema({
    category: {
        type: String,
        minlength: 1,
        maxlength: 40,
        required: true,
    },

    name: {
        type: String,
        minlength: 1,
        maxlength: 40,
        required: true
    },

    amount: {
        type: Number,
        min: 0,
        max: 1000000,
        required: true
    },

    date: {
        type: String,
        immutable: true,
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