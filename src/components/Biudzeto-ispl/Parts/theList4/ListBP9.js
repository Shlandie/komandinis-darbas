import React from "react";
import "./ListBP9.css";
import "../../BP9global.css";
import ExpenseBoxesBP9 from "./ExpenseBoxesBP9/ExpenseBoxesBP9";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../../Delete-popup/Dialog";
import NewPostBP3 from "../NewPost3/NewPostBP3";

export default function ListBP9() {
    const budgetEntries = [
        {
            id: 1,
            budgetCategory: "Transportas",
            budgetAmount: 800,
            budgetColor: "sharpPink",
        },
        {
            id: 2,
            budgetCategory: "Maistas",
            budgetAmount: 800,
            budgetColor: "green",
        },
        {
            id: 3,
            budgetCategory: "Pramogos",
            budgetAmount: 800,
            budgetColor: "orange",
        },
    ];

    const [budgets, setBudgets] = useState(budgetEntries);

    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [amountInput, setAmountInput] = useState("");

    const [categoryOnEdit, setCategoryOnEdit] = useState("");
    const [colorOnEdit, setColorOnEdit] = useState("");
    const [amountInputOnEdit, setAmountInputOnEdit] = useState("");

    const [editBudget, setEditBudget] = useState(false);
    const [updateBudget, setUpdateBudget] = useState({});
    const [error, setError] = useState(false);
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

    const handleDeleteBudget = (id) => {
        handleDialog("Ar tikrai norite ištrinti?", true);
        idProductRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setBudgets(
                budgets.filter((budget) => budget.id !== idProductRef.current)
            );
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditBudget = (id) => {
        setEditBudget(true);
        let findBudget = budgets.find((budget) => budget.id == id);
        //console.log(findBudget);
        setCategoryOnEdit(findBudget.budgetCategory);
        setColorOnEdit(findBudget.budgetColor);
        setAmountInputOnEdit(findBudget.budgetAmount);
        setUpdateBudget(findBudget);
    };

    const handleUpdateBudget = ({ id }) => {
        let newBudgetsList = budgets.map((budget) => {
            if (budget.id == id) {
                return {
                    id: uuidv4(),
                    budgetCategory: categoryOnEdit,
                    budgetColor: colorOnEdit,
                    budgetAmount: amountInputOnEdit,
                };
            }
            return budget;
        });
        setBudgets(newBudgetsList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editBudget) {
            if (category.length == 0 || color.length == 0 || amountInput == 0) {
                setError(true);
            } else {
                let newBudget = {
                    id: uuidv4(),
                    budgetCategory: category,
                    budgetColor: color,
                    budgetAmount: amountInput,
                };
                //console.log(newBudget)
                setBudgets((oldList) => [...oldList, newBudget]);
                //console.log(budgets)
                setCategory("");
                setColor("");
                setAmountInput("");
                setError(false);
            }
        } else {
            if (
                categoryOnEdit.length == 0 ||
                colorOnEdit.length == 0 ||
                amountInputOnEdit == 0
            ) {
                setError(true);
            } else {
                handleUpdateBudget(updateBudget);
                setCategoryOnEdit("");
                setColorOnEdit("");
                setAmountInputOnEdit("");
                setError(false);
                setEditBudget(false);
            }
        }
    };

    let list = budgets.map((budget) => {
        return (
            <ExpenseBoxesBP9
                key={uuidv4()}
                id={budget.id}
                category={budget.budgetCategory}
                color={budget.budgetColor}
                amount={budget.budgetAmount}
                deleteBudget={handleDeleteBudget}
                editBudget={handleEditBudget}
            />
        );
    });
    return (
        // Container 1
        <>
            <NewPostBP3
                handleSubmit={handleSubmit}
                amountInput={amountInput}
                setAmountInput={setAmountInput}
                color={color}
                setColor={setColor}
                category={category}
                setCategory={setCategory}
                error={error}
            />

            <div className="BP9container4 fontClr py-5">
                <button className="btn F-size-20 BP9-btnX">X</button>
                <h3 className="fs-25 mb-4">Biudžetas</h3>

                <div className="BP9-ListContainer">{list}</div>

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
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <select
                                        className="BP9selectContainer IncomeNewEntry-input F-size-20"
                                        aria-label="Default select example"
                                        id="programSelect"
                                        name="programSelect"
                                        required
                                        value={categoryOnEdit}
                                        onChange={(e) =>
                                            setCategoryOnEdit(e.target.value)
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
                                    <select
                                        className="BP9selectContainer IncomeNewEntry-input F-size-20"
                                        aria-label="Default select example"
                                        id="colorSelect"
                                        name="colorSelect"
                                        required
                                        value={colorOnEdit}
                                        onChange={(e) =>
                                            setColorOnEdit(e.target.value)
                                        }
                                    >
                                        <option disabled value="">
                                            Spalva
                                        </option>
                                        <option value="sharpPink">
                                            Rožinė
                                        </option>
                                        <option value="bubblegumPink">
                                            Šviesiai Rožinė
                                        </option>
                                        <option value="purple">
                                            Violetinė
                                        </option>
                                        <option value="blue">Mėlyna</option>
                                        <option value="lightBlue">
                                            Šviesiai Mėlyna
                                        </option>
                                        <option value="green">Žalia</option>
                                        <option value="yellow">Geltona</option>
                                        <option value="orange">Oranžinė</option>
                                        <option value="red">Raudona</option>
                                    </select>
                                    <input
                                        onChange={(e) =>
                                            setAmountInputOnEdit(e.target.value)
                                        }
                                        type="number"
                                        id="amountInput"
                                        name="amountInput"
                                        value={amountInputOnEdit}
                                        className="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Suma"
                                    />
                                    {error && amountInputOnEdit.length <= 0 ? (
                                        <div className="Error-msg">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="d-flex my-3">
                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            class="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue me-2"
                                            data-bs-target="#exampleModalToggle2"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Patvirtinti
                                        </button>
                                        <button
                                            type="button"
                                            class="btn F-size-20 Roboto-condensed Main-btn Bg-light-red ms-2"
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
                                <div class="success-animation mb-4">
                                    <svg
                                        class="checkmark"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                    >
                                        <circle
                                            class="checkmark__circle"
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                        />
                                        <path
                                            class="checkmark__check"
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
