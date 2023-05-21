import React from "react";
import ExpenseItem from "../Islaidu-sekc/Islaidu-sekc-irasas";
import "./Islaidu-sekc.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react";
import moment from "moment";

function IslaiduSekc() {    
    const [expenses, setExpenses] = useState([]);
    const [expenseName, setExpenseName] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");
    const [expenseSum, setExpenseSum] = useState("");
    const [expenseDate, setExpenseDate] = useState(moment().format("YYYY-MM-DD"));
    const expenseNameInputRef = useRef(null);
    const [error, setError] = useState(false);

    const url = "http://localhost:4000/api/v1/expenses";

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setExpenses(data.data.expenses);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!expenseName || !expenseCategory || !expenseSum || !expenseDate) {
            setError(true);
            return;
        }

        // Create a new expense object
        const newExpense = {
            key: uuidv4(),
            name: expenseName,
            category: expenseCategory,
            date: expenseDate,
            amount: parseFloat(expenseSum),
        };
        const add = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExpense),
        });

        // Update the expenses array using the previous state
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

        // Reset the form input values
        setExpenseName("");
        setExpenseCategory("");
        setExpenseSum("");
        setExpenseDate("");

        // Focus on the expense name input field
        expenseNameInputRef.current.focus();
        setError(false);
    };

    // count total amount
    const totalExpenseAmount = expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0);

    let ListItems = expenses
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((expense) => {
            return (
                <ExpenseItem
                    key={uuidv4()}
                    id={expense._id}
                    title={expense.name}
                    category={expense.category}
                    date={expense.date}
                    amount={expense.amount}
                />
            );
        });

    return (
        <div className="Expenses-section BP38-child3">
            <div className="main-expenses">
                <h5 className="d-flex justify-content-between">
                    <div className="main-expence-header">Išlaidos</div>
                    <div className="main-expence-sum">
                        {totalExpenseAmount}eur
                    </div>
                </h5>
                <div className="main-expence-box">{ListItems}</div>
                <Link class="nav-link" to="/islaidu-isplestine">
                    <button type="button" className="expenses-extend-button">
                        Išskleisti
                    </button>
                </Link>
            </div>

            <form className="expences-addition">
                <div className="form-group main-form-name">
                    <input
                        type="text"
                        className={`form-control ${
                            error && !expenseName ? "is-invalid" : ""
                        }`}
                        id="expence-name"
                        placeholder="Pavadinimas"
                        value={expenseName}
                        onChange={(event) => setExpenseName(event.target.value)}
                        ref={expenseNameInputRef}
                        required
                        maxLength="20"
                    />
                </div>

                <div>
                    <select
                        className={`form-control ${
                            error && !expenseCategory ? "is-invalid" : ""
                        }`}
                        id="expence-category"
                        value={expenseCategory}
                        onChange={(event) =>
                            setExpenseCategory(event.target.value)
                        }
                        required
                    >
                        <option disabled selected>
                            Kategorija
                        </option>
                        <option>Transportas</option>
                        <option>Maistas ir gėrimai</option>
                        <option>Pramogos</option>
                        <option>Mokesčiai</option>
                        <option>Paslaugos</option>
                        <option>Pirkiniai ir daiktai</option>
                        <option>Kitos išlaidos</option>
                    </select>
                </div>

                <div className="row">
                    <div className="form-group col">
                        <input
                            onChange={(e) => {
                                const regex = /^[0-9]{0,10}(\.[0-9]{0,2})?$/;
                                if (regex.test(e.target.value)) {
                                    setExpenseSum(e.target.value);
                                }
                            }}
                            type="number"
                            className={`form-control ${
                                error && !expenseSum ? "is-invalid" : ""
                            }`}
                            id="expence-sum"
                            placeholder="Suma"
                            value={expenseSum}
                        />
                    </div>

                    <div className="form-group col">
                        <input
                            type="date"
                            className={`form-control BP9clrGray ${
                                error && !expenseName.length == 0 ? "is-invalid" : ""
                            }`}
                            id="expence-date"
                            placeholder="Enter date"
                            value={expenseDate}
                            onChange={(event) =>
                                setExpenseDate(event.target.value)
                            }
                            onMouseDown={(e) => {
                                e.preventDefault();
                                e.target.type = "date";
                            }}
                            required
                            max={moment().format("YYYY-MM-DD")}
                            min={moment()
                                .subtract(3, "years")
                                .format("YYYY-MM-DD")}
                        />
                    </div>
                </div>

                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn  expense-submit-button BP9clrGray"
                >
                    Pridėti irašą
                </button>
            </form>
        </div>
    );
}
export default IslaiduSekc;
