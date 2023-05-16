import React from "react";
import IslaiduIsplIrasas from "../Islaidu-ispl-irasas/Islaidu-ispl-irasas";
import "../Islaidu-ispl/Islaidu-ispl.css";
import "../Islaidu-ispl/Islaidu-ispl-grid.css";
import ExpenseSearchBar from '../Islaidu-ispl/islaidu-ispl-search';
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../Delete-popup/Dialog";
import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";
import moment from 'moment';

const url = "http://localhost:4000/api/v1/expenses";

function IslaiduIspl() {

    const options = [
        {
            value: "",
            text: "Kategorija",
        },
        {
            value: "Transportas",
            text: "Transportas",
        },
        {
            value: "Maistas ir gėrimai",
            text: "Maistas ir gėrimai",
        },
        {
            value: "Pramogos",
            text: "Pramogos",
        },
        {
            value: "Mokesčiai",
            text: "Mokesčiai",
        },
        {
            value: "Paslaugos",
            text: "Paslaugos",
        },
        {
            value: "Pirkiniai ir daiktai",
            text: "Pirkiniai ir daiktai",
        },
        {
            value: "Kitos išlaidos",
            text: "Kitos išlaidos",
        },
    ];

    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const [titleInput, setTitleInput] = useState("");
    const [categoryInput, setCategoryInput] = useState(options[0].value);
    //console.log(categoryInput)
    const [dateInput, setDateInput] = useState(moment().format('YYYY-MM-DD'));
    const [amountInput, setAmountInput] = useState("");

    const [titleInputOnEdit, setTitleInputOnEdit] = useState("");
    const [categoryInputOnEdit, setCategoryInputOnEdit] = useState("");
    const [dateInputOnEdit, setDateInputOnEdit] = useState("");
    const [amountInputOnEdit, setAmountInputOnEdit] = useState("");

    const [editExpense, setEditExpense] = useState(false);
    const [updateExpense, setUpdateExpense] = useState({});

    const [error, setError] = useState(false);
    const [errorOnEdit, setErrorOnEdit] = useState(false);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setExpenses(data.data.expenses);
        console.log(data);
    };
    useEffect(() => {
        getData();
    }, []);

    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
    });

    const idProductRef = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };

    const handleDismiss = () => {
        setEditExpense(false);
    }

    const handleFilterExpenses = (filtered) => {
        setFilteredExpenses(filtered);
    };

    const handleDeleteExpense = (id) => {
        handleDialog("Ar tikrai norite ištrinti?", true);
        idProductRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setExpenses(
                expenses.filter(
                    (expense) => expense.id !== idProductRef.current
                )
            );
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditExpense = (id) => {
        setEditExpense(true);
        let findExpense = expenses.find((expense) => expense.id == id);
        //console.log(findExpense);
        setTitleInputOnEdit(findExpense.name);
        setDateInputOnEdit(findExpense.date);
        setCategoryInputOnEdit(findExpense.category);
        setAmountInputOnEdit(findExpense.amount);
        setUpdateExpense(findExpense);
    };

    const handleUpdateExpense = ({ id }) => {
        let newExpensesList = expenses.map((expense) => {
            if (expense.id == id) {
                return {
                    id: uuidv4(),
                    name: titleInputOnEdit,
                    date: dateInputOnEdit,
                    category: categoryInputOnEdit,
                    amount: amountInputOnEdit,
                };
            }
            return expense;
        });
        setExpenses(newExpensesList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editExpense) {
            if (
                titleInput.length == 0 ||
                amountInput == 0 ||
                categoryInput.length == 0
            ) {
                setError(true);
            } else {
                let newExpense = {
                    id: uuidv4(),
                    name: titleInput,
                    date: dateInput,
                    amount: amountInput,
                    category: categoryInput,
                };
                //console.log(newIncome)
                setExpenses((oldList) => [...oldList, newExpense]);
                //console.log(expenses)
                setTitleInput("");
                setDateInput(moment().format("YYYY-MM-DD"));
                setAmountInput("");
                setCategoryInput(options[0].value);
                setError(false);
            }
        } else {
            if (
                titleInputOnEdit.length == 0 ||
                amountInputOnEdit.length == 0
            ) {
                setErrorOnEdit(true);
            } else {
                handleUpdateExpense(updateExpense);
                setTitleInputOnEdit("");
                setDateInputOnEdit("");
                setCategoryInputOnEdit("");
                setAmountInputOnEdit("");
                setErrorOnEdit(false);
                setEditExpense(false);
            }
        }
    };

    const handleCategoryChange = (e) => {
        setCategoryInput(e.target.value);
    };

    let list = (filteredExpenses.length > 0 ? filteredExpenses : expenses).map((expense) => {
        return (
            <IslaiduIsplIrasas
                key={uuidv4()}
                id={expense._id}
                title={expense.name}
                category={expense.category}
                date={expense.date}
                amount={expense.amount}
                deleteExpense={handleDeleteExpense}
                editExpense={handleEditExpense}
            />
        );
    });

    return (
        <>
            <div className="row g-0 Income-wrapper gridParent-0">
                <Navigation />
                <div className="row d-flex g-0  IncomeNav gridChild-1 Roboto-condensed F-size-20">
                    <Link to='/pajamu-isplestine' className='BP9-btn colorAnchored'>
                        <div>Pajamos</div> </Link>

                    <Link to='/islaidu-isplestine' className='BP9-btn colorAnchored BP9-selectedbtn'>
                        <div>Išlaidos</div> </Link>

                    <Link to='/biudzeto-isplestine' className='BP9-btn colorAnchored'>
                        <div>Biudžetas</div> </Link>
                </div>

                {/* SEARCH */}
                <ExpenseSearchBar expenses={expenses}  onFilterExpenses={handleFilterExpenses} />

                {/* ADD ENTRY */}
                <div className="row gap-2 g-0 gridChild-3">
                    <div className="col py-5 IncomeNewEntry">
                        <h4 className="Roboto-condensed F-size-25">
                            Naujas įrašas
                        </h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <input
                                    onChange={(e) =>
                                        setTitleInput(e.target.value)
                                    }
                                    required
                                    type="text"
                                    id="titleInput"
                                    name="titleInput"
                                    value={titleInput}
                                    className="form-control IncomeNewEntry-input F-size-20"
                                    placeholder="Pavadinimas"
                                    maxLength="20"
                                />
                            </div>
                            {error && titleInput.length <= 0 ? (
                                <div className="Error-msg pt-1">
                                    Šis laukelis yra privalomas
                                </div>
                            ) : (
                                ""
                            )}

                            <select
                                className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
                                aria-label="Default select example"
                                value={categoryInput}
                                onChange={handleCategoryChange}
                            >
                                {options.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </option>
                                ))}
                                ;
                            </select>
                            {error && categoryInput.length <= 0 ? (
                                <div className="Error-msg pt-1">
                                    Šis laukelis yra privalomas
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="d-flex mt-2">
                                <div className="mb-2 me-3">
                                    <input
                                        onKeyPress={(e) => {
                                            if (e.key === "-" || e.key === "+")
                                                e.preventDefault();
                                        }}
                                        onChange={(e) => {
                                            const regex = /^[0-9]{0,10}(\.[0-9]{0,2})?$/;
                                            if (regex.test(e.target.value)) {
                                                setAmountInput(e.target.value);
                                            }
                                        }}
                                        type="number"
                                        id="amountInput"
                                        name="amountInput"
                                        value={amountInput}
                                        className="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Suma"
                                    />
                                    {error && amountInput.length <= 0 ? (
                                        <div className="Error-msg pt-1">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                <div className="mb-2 w-100">
                                    <input
                                        onChange={(e) =>
                                            setDateInput(e.target.value)
                                        }
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.target.type = 'date';
                                        }}
                                        type="date"
                                        id="dateInput"
                                        name="dateInput"
                                        value={dateInput}
                                        max={moment().format("YYYY-MM-DD")}
                                        min={moment().subtract(3, "years").format("YYYY-MM-DD")}
                                        className="form-control IncomeNewEntry-input F-size-20"
                                    />
                                    
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
                            >
                                Pridėti įrašą
                            </button>
                        </form>
                    </div>
                </div>
                {/* ENTRIES */}
                <div className="col py-5 IncomeEntries gridChild-4">
                    <Link to='/'>
                        <button className="btn BP9-btnX Close-btn Bg-light-blue Roboto-condensed F-size-20">
                            <span className="xBtn">X</span>
                        </button>
                    </Link>
                    <div className="d-flex justify-content-between mb-4">
                        <h4 className="Roboto-condensed F-size-25">Išlaidos</h4>
                    </div>
                    {list}
                </div>
                {/* POP UP FOR EDIT */}
                <div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-4 Edit-pop-up">
                            <div className="modal-header mx-2 border-bottom-0">
                                <h5
                                    className="modal-title F-size-25 Roboto-condensed"
                                    id="exampleModalToggleLabel"
                                >
                                    Redaguoti įrašą
                                </h5>
                                <button
                                    onClick={handleDismiss}
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <input
                                            onChange={(e) => {
                                                setTitleInputOnEdit(
                                                    e.target.value
                                                    
                                                )
                                            }
                                            }
                                            required
                                            type="text"
                                            id="titleInput"
                                            name="titleInput"
                                            value={titleInputOnEdit}
                                            className="form-control IncomeNewEntry-input F-size-20"
                                            placeholder="Pavadinimas"
                                            maxLength="20"
                                        />
                                    </div>
                                    {errorOnEdit && titleInputOnEdit.length <= 0 ? (
                                        <div className="Error-msg pt-1">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <select
                                        className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
                                        aria-label="Default select example"
                                        id="programSelect"
                                        name="programSelect"
                                        required
                                        value={categoryInputOnEdit}
                                        onChange={(e) =>
                                            setCategoryInputOnEdit(
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option disabled value="">
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
                                    <div className="d-flex mt-2">
                                        <div className="mb-2 me-3">
                                            <input
                                                onKeyPress={(e) => {
                                                    if (e.key === "-" || e.key === "+")
                                                        e.preventDefault();
                                                }}
                                                onChange={(e) => {
                                                    const regex = /^[0-9]{0,10}(\.[0-9]{0,2})?$/;
                                                    if (regex.test(e.target.value)) {
                                                        setAmountInputOnEdit(e.target.value);
                                                    }
                                                }}
                                                type="number"
                                                id="amountInput"
                                                name="amountInput"
                                                value={amountInputOnEdit}
                                                className="form-control IncomeNewEntry-input F-size-20"
                                                placeholder="Suma"
                                            />
                                        
                                        {errorOnEdit &&
                                            amountInputOnEdit.length <= 0 ? (
                                            <div className="Error-msg w-100 pt-1">
                                                Šis laukelis yra privalomas
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        </div>
                                        <div>
                                            <input
                                                onChange={(e) =>
                                                    setDateInputOnEdit(
                                                        e.target.value
                                                    )
                                                }
                                                type="date"
                                                id="dateInput"
                                                name="dateInput"
                                                value={dateInputOnEdit}
                                                className="form-control IncomeNewEntry-input F-size-20"
                                                max={moment().format("YYYY-MM-DD")}
                                                min={moment().subtract(3, "years").format("YYYY-MM-DD")}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 mt-2">
                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="btn F-size-20 Roboto-condensed Main-btn3 Bg-light-blue Edit-btn me-2"
                                            data-bs-target={titleInputOnEdit.length <= 0 || amountInputOnEdit.length <= 0 ? '' : "#exampleModalToggle2" }
                                            data-bs-toggle={titleInputOnEdit.length <= 0 || amountInputOnEdit.length <= 0 ? '' : 'modal'}
                                        >
                                            Patvirtinti
                                        </button>
                                        <button
                                            onClick={handleDismiss}
                                            type="button"
                                            className="btn F-size-20 Roboto-condensed Main-btn3 Bg-light-red Del-btn ms-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Atšaukti
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-4 Edit-pop-up">
                            <div className="modal-header border-bottom-0">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body mb-4">
                                <div className="success-animation mb-4">
                                    <svg
                                        className="checkmark"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                    >
                                        <circle
                                            className="checkmark__circle"
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                        />
                                        <path
                                            className="checkmark__check"
                                            fill="none"
                                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                        />
                                    </svg>
                                </div>
                                <p className="F-size-25 Roboto-condensed text-center">
                                    Įrašas sėkmingai atnaujintas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {dialog.isLoading && (
                    <Dialog
                        onDialog={areUSureDelete}
                        message={dialog.message}
                    />
                )}
            </div>
        </>
    );
}

export default IslaiduIspl;
