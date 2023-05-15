const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 20,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        min: 0,
        max: 10000,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

const earningsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },

    amount: {
        type: Number,
        min: 1,
        max: 10000,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

const budgetSchema = new mongoose.Schema({
    category: {
        type: String,
        minlength: 1,
        maxlength: 40,
        required: true
    },

    color: {
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

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = new mongoose.model("User", userSchema);
const Expense = new mongoose.model("Expense", expenseSchema);
const Earning = new mongoose.model("Earning", earningsSchema);
const Budget = new mongoose.model("Budget", budgetSchema);

module.exports = { User, Expense, Earning, Budget };