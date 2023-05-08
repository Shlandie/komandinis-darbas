import React from "react";
import PajamuIsplIrasas from "../Pajamu-ispl-irasas/Pajamu-ispl-irasas";
import "../Pajamu-ispl/Pajamu-ispl.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../Delete-popup/Dialog";
import Navigation from "../../Navigation/Navigation";
import '../Pajamu-ispl/Pajamu-ispl-grid.css'
import { Link } from "react-router-dom";
function PajamuIspl() {
    const incomeEntries = [
        {
            id: 1,
            incomeTitle: "Alga",
            incomeDate: "2023-02-15",
            incomeAmount: 800,
        },
        {
            id: 2,
            incomeTitle: "Dovana",
            incomeDate: "2023-02-20",
            incomeAmount: 30,
        },
        {
            id: 3,
            incomeTitle: "Algos priedas",
            incomeDate: "2023-02-15",
            incomeAmount: 150,
        },
        {
            id: 4,
            incomeTitle: "Algos priedas",
            incomeDate: "2023-02-15",
            incomeAmount: 150,
        },
    ];

    const [incomes, setIncomes] = useState(incomeEntries);

    const [titleInput, setTitleInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

    const [titleInputOnEdit, setTitleInputOnEdit] = useState("");
    const [dateInputOnEdit, setDateInputOnEdit] = useState("");
    const [amountInputOnEdit, setAmountInputOnEdit] = useState("");

    const [editIncome, setEditIncome] = useState(false);
    const [updateIncome, setUpdateIncome] = useState({});
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

    const handleDeleteIncome = (id) => {
        handleDialog("Ar tikrai norite ištrinti?", true);
        idProductRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setIncomes(
                incomes.filter((income) => income.id !== idProductRef.current)
            );
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditIncome = (id) => {
        setEditIncome(true);
        let findIncome = incomes.find((income) => income.id == id);
        //console.log(findIncome);
        setTitleInputOnEdit(findIncome.incomeTitle);
        setDateInputOnEdit(findIncome.incomeDate);
        setAmountInputOnEdit(findIncome.incomeAmount);
        setUpdateIncome(findIncome);
    };

    const handleUpdateIncome = ({ id }) => {
        let newIncomesList = incomes.map((income) => {
            if (income.id == id) {
                return {
                    id: uuidv4(),
                    incomeTitle: titleInputOnEdit,
                    incomeDate: dateInputOnEdit,
                    incomeAmount: amountInputOnEdit,
                };
            }
            return income;
        });
        setIncomes(newIncomesList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editIncome) {
            if (
                titleInput.length == 0 ||
                dateInput.length == 0 ||
                amountInput == 0
            ) {
                setError(true);
            } else {
                let newIncome = {
                    id: uuidv4(),
                    incomeTitle: titleInput,
                    incomeDate: dateInput,
                    incomeAmount: amountInput,
                };
                //console.log(newIncome)
                setIncomes((oldList) => [...oldList, newIncome]);
                //console.log(incomes)
                setTitleInput("");
                setDateInput("");
                setAmountInput("");
                setError(false);
            }
        } else {
            if (
                titleInputOnEdit.length == 0 ||
                dateInputOnEdit.length == 0 ||
                amountInputOnEdit == 0
            ) {
                setError(true);
            } else {
                handleUpdateIncome(updateIncome);
                setTitleInputOnEdit("");
                setDateInputOnEdit("");
                setAmountInputOnEdit("");
                setError(false);
                setEditIncome(false);
            }
        }
    };

    let list = incomes.map((income) => {
        return (
            <PajamuIsplIrasas
                key={uuidv4()}
                id={income.id}
                title={income.incomeTitle}
                date={income.incomeDate}
                amount={income.incomeAmount}
                deleteIncome={handleDeleteIncome}
                editIncome={handleEditIncome}
            />
        );
    });

    return (
        <>
            <div className="g-0 Income-wrapper gridParent-0">
        <Navigation />
                    <div className="row d-flex g-0  IncomeNav gridChild-1">
                        <div className="width30">
                            <button className="btn Main-btn2 Roboto-condensed F-size-20 darkBlueClr">
                                Pajamos
                            </button>
                        </div>
                        <div className="width30">
                            <button className="btn Main-btn2 Bg-light-blue Roboto-condensed F-size-20">
                                Išlaidos
                            </button>
                        </div>
                        <div className="width30">
                            <button className="btn Main-btn2 Bg-light-blue Roboto-condensed F-size-20">
                                Biudžetas
                            </button>
                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="row gap-2 g-0  gridChild-2">
                        <div className="IncomeSearch">
                            <h4
                                className="Roboto-condensed F-size-25 IncomeSearch-title {
"
                            >
                                Paieška
                            </h4>
                            <form>
                                <div class="">
                                    <input
                                        type="date"
                                        class="form-control IncomeNewEntry-input F-size-20"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
                                >
                                    Ieškoti
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* ADD ENTRY */}
                    <div className="row gap-2 g-0 gridChild-3">
                        <div className="col py-5 IncomeNewEntry">
                            <h4 className="Roboto-condensed F-size-25 IncomeNewEntry-title">
                                Naujas Įrašas
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div class="">
                                    <input
                                        onChange={(e) =>
                                            setTitleInput(e.target.value)
                                        }
                                        type="text"
                                        id="titleInput"
                                        name="titleInput"
                                        value={titleInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Pavadinimas"
                                    />
                                </div>
                                {error && titleInput.length <= 0 ? (
                                    <div className="Error-msg">
                                        Šis laukelis yra privalomas
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div class="">
                                    <input
                                        onChange={(e) =>
                                            setDateInput(e.target.value)
                                        }
                                        type="date"
                                        id="dateInput"
                                        name="dateInput"
                                        value={dateInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                    />
                                </div>
                                {error && dateInput.length <= 0 ? (
                                    <div className="Error-msg">
                                        Šis laukelis yra privalomas
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div class="">
                                    <input
                                        onChange={(e) =>
                                            setAmountInput(e.target.value)
                                        }
                                        type="number"
                                        id="amountInput"
                                        name="amountInput"
                                        value={amountInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Suma"
                                    />
                                </div>
                                {error && amountInput.length <= 0 ? (
                                    <div className="Error-msg">
                                        Šis laukelis yra privalomas
                                    </div>
                                ) : (
                                    ""
                                )}
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    class="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
                                >
                                    Pridėti irašą
                                </button>
                            </form>
                        </div>
                    </div>
                {/* ENTRIES */}
                <div className="col py-5 IncomeEntries gridChild-4">
                    <Link to='/'>

                    <button className="btn Close-btn Bg-light-blue Roboto-condensed F-size-20"><span className="xBtn">X</span>
                        <img
                            className="Close-btn-img"
                            src="https://th.bing.com/th/id/R.e24725fa2952bb5919d5ba9d22898bb7?rik=IdSOnVEyvVmW5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_352807.png&ehk=749keciRy4ORDsUyCQNI5DuGogVsfcVDAA7ywtAcD6Q%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            />
                    </button>
                            </Link>
                    <div className="d-flex justify-content-between mb-4">
                        <h4 className="Roboto-condensed F-size-25">Pajamos</h4>
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
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="">
                                        <input
                                            onChange={(e) =>
                                                setTitleInputOnEdit(
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            id="titleInput"
                                            name="titleInput"
                                            value={titleInputOnEdit}
                                            class="form-control IncomeNewEntry-input F-size-20"
                                            placeholder="Pavadinimas"
                                        />
                                    </div>
                                    {error && titleInputOnEdit.length <= 0 ? (
                                        <div className="Error-msg">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div class="">
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
                                            class="form-control IncomeNewEntry-input F-size-20"
                                        />
                                    </div>
                                    {error && dateInputOnEdit.length <= 0 ? (
                                        <div className="Error-msg">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div class="">
                                        <input
                                            onChange={(e) =>
                                                setAmountInputOnEdit(
                                                    e.target.value
                                                )
                                            }
                                            type="number"
                                            id="amountInput"
                                            name="amountInput"
                                            value={amountInputOnEdit}
                                            class="form-control IncomeNewEntry-input F-size-20"
                                            placeholder="Suma"
                                        />
                                    </div>
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
                                            class="btn F-size-20 Roboto-condensed Main-btn3 Bg-light-blue me-2"
                                            data-bs-target="#exampleModalToggle2"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Patvirtinti
                                        </button>
                                        <button
                                            type="button"
                                            class="btn F-size-20 Roboto-condensed Main-btn3 Bg-light-red ms-2"
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

export default PajamuIspl;
