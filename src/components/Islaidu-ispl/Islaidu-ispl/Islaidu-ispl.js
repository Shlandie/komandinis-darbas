import React from "react";
import IslaiduIsplIrasas from "../Islaidu-ispl-irasas/Islaidu-ispl-irasas";
import "../Islaidu-ispl/Islaidu-ispl.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../Delete-popup/Dialog";
import Navigation from "../../Navigation/Navigation";

function IslaiduIspl() {
    const expenceEntries = [
        {
            id: 1,
            expenceTitle: "Maxima",
            expenceCategory: "Maistas",
            expenceDate: "2023-02-15",
            expenceAmount: 30,
        },
        {
            id: 2,
            expenceTitle: "IKI",
            expenceCategory: "Maistas",
            expenceDate: "2023-03-15",
            expenceAmount: 55,
        },
        {
            id: 3,
            expenceTitle: "Forum Cinema",
            expenceCategory: "Pramogos",
            expenceDate: "2023-02-15",
            expenceAmount: 15,
        },
        {
            id: 4,
            expenceTitle: "Maxima",
            expenceCategory: "Maistas",
            expenceDate: "2023-02-15",
            expenceAmount: 41,
        },
        {
            id: 5,
            expenceTitle: "Maxima",
            expenceCategory: "Maistas",
            expenceDate: "2023-02-15",
            expenceAmount: 25,
        },
    ];

    const [expences, setExpences] = useState(expenceEntries);

    const [titleInput, setTitleInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

    const [titleInputOnEdit, setTitleInputOnEdit] = useState("");
    const [categoryInputOnEdit, setCategoryInputOnEdit] = useState("");
    const [dateInputOnEdit, setDateInputOnEdit] = useState("");
    const [amountInputOnEdit, setAmountInputOnEdit] = useState("");

    const [editExpence, setEditExpence] = useState(false);
    const [updateExpence, setUpdateExpence] = useState({});

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

    const handleDeleteExpence = (id) => {
        handleDialog("Ar tikrai norite ištrinti?", true);
        idProductRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setExpences(
                expences.filter(
                    (expense) => expense.id !== idProductRef.current
                )
            );
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditExpence = (id) => {
        setEditExpence(true);
        let findExpence = expences.find((expence) => expence.id == id);
        //console.log(findExpence);
        setTitleInputOnEdit(findExpence.expenceTitle);
        setDateInputOnEdit(findExpence.expenceDate);
        setAmountInputOnEdit(findExpence.expenceAmount);
        setUpdateExpence(findExpence);
    };

    const handleUpdateExpence = ({ id }) => {
        let newExpencesList = expences.map((expence) => {
            if (expence.id == id) {
                return {
                    id: uuidv4(),
                    expenceTitle: titleInputOnEdit,
                    expenceDate: dateInputOnEdit,
                    expenceAmount: amountInputOnEdit,
                };
            }
            return expence;
        });
        setExpences(newExpencesList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editExpence) {
            if (
                titleInput.length == 0 ||
                dateInput.length == 0 ||
                amountInput == 0
            ) {
                setError(true);
            } else {
                let newExpence = {
                    id: uuidv4(),
                    expenceTitle: titleInput,
                    expenceDate: dateInput,
                    expenceAmount: amountInput,
                };
                //console.log(newIncome)
                setExpences((oldList) => [...oldList, expences]);
                //console.log(expences)
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
                handleUpdateExpence(updateExpence);
                setTitleInputOnEdit("");
                setDateInputOnEdit("");
                setAmountInputOnEdit("");
                setError(false);
                setEditExpence(false);
            }
        }
    };

    let list = expences.map((expence) => {
        return (
            <IslaiduIsplIrasas
                key={uuidv4()}
                id={expence.id}
                title={expence.expenceTitle}
                category={expence.expenceCategory}
                date={expence.expenceDate}
                amount={expence.expenceAmount}
                deleteExpence={handleDeleteExpence}
                editExpence={handleEditExpence}
            />
        );
    });

    return (
        <>
            <div className="row gap-2 g-0 Income-wrapper">
            <Navigation />
                <div className="col-4 IncomeSidebar">
                    <div className="row d-flex gap-2 g-0 mb-2 IncomeNav">
                        <div className="col ">
                            <button className="btn Main-btn Bg-light-blue Roboto-condensed F-size-20 ">
                                Pajamos
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn Main-btn darkBlueClr Roboto-condensed F-size-20">
                                Išlaidos
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn Main-btn Bg-light-blue Roboto-condensed F-size-20">
                                Biudžetas
                            </button>
                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="row gap-2 g-0 mb-2">
                        <div className="p-5 IncomeSearch">
                            <h4 className="Roboto-condensed F-size-25 ExpenceSearch-title">
                                Paieška
                            </h4>
                            <form>
                                <div class="mb-2">
                                    <input
                                        type="date"
                                        class="form-control IncomeNewEntry-input F-size-20"
                                    />
                                </div>
                                <select
                                    className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
                                    aria-label="Default select example"
                                    id="programSelect"
                                    name="programSelect"
                                    required
                                >
                                    <option defaultValue>
                                        Pagal kategoriją
                                    </option>
                                    <option value="Java">Maistas</option>
                                    <option value="PHP">Pramogos</option>
                                </select>
                                <button
                                    type="submit"
                                    class="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue mt-2"
                                >
                                    Ieškoti
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* ADD ENTRY */}
                    <div className="row gap-2 g-0 ">
                        <div className="col p-5 IncomeNewEntry">
                            <h4 className="Roboto-condensed F-size-25 ExpenceNewEntry-title">
                                Naujas Įrašas
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-2">
                                    <input
                                        onChange={(e) =>
                                            setTitleInput(e.target.value)
                                        }
                                        required
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
                                <select
                                    className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
                                    aria-label="Default select example"
                                    id="programSelect"
                                    name="programSelect"
                                    required
                                >
                                    <option defaultValue>Kategorija</option>
                                    <option value="Java">Maistas</option>
                                    <option value="PHP">Pramogos</option>
                                </select>
                                <div className="d-flex mt-2">
                                    <div class="mb-2 me-3">
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
                                    <div class="mb-2">
                                        <input
                                            onChange={(e) =>
                                                setDateInput(e.target.value)
                                            }
                                            type="date"
                                            id="dateInput"
                                            name="dateInput"
                                            value={dateInput}
                                            class="form-control IncomeNewEntry-input F-size-20"
                                            placeholder="Data"
                                        />
                                    </div>
                                    {error && dateInput.length <= 0 ? (
                                        <div className="Error-msg">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    class="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
                                >
                                    Pridėti irašą
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* ENTRIES */}
                <div className="col p-5 IncomeEntries">
                    <button className="btn Close-btn Bg-light-blue Roboto-condensed F-size-20">
                        <img
                            className="Close-btn-img"
                            src="https://th.bing.com/th/id/R.e24725fa2952bb5919d5ba9d22898bb7?rik=IdSOnVEyvVmW5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_352807.png&ehk=749keciRy4ORDsUyCQNI5DuGogVsfcVDAA7ywtAcD6Q%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                        />
                    </button>
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
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-2">
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
                                    <select
                                        className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
                                        aria-label="Default select example"
                                        id="programSelect"
                                        name="programSelect"
                                        required
                                    >
                                        <option defaultValue>Kategorija</option>
                                        <option value="Java">Maistas</option>
                                        <option value="PHP">Pramogos</option>
                                    </select>
                                    <div className="d-flex mt-2">
                                        <div class="mb-2 me-3">
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
                                        {error &&
                                        amountInputOnEdit.length <= 0 ? (
                                            <div className="Error-msg">
                                                Šis laukelis yra privalomas
                                            </div>
                                        ) : (
                                            ""
                                        )}
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
                                                class="form-control IncomeNewEntry-input F-size-20"
                                            />
                                        </div>
                                        {error &&
                                        dateInputOnEdit.length <= 0 ? (
                                            <div className="Error-msg">
                                                Šis laukelis yra privalomas
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="d-flex mb-3 mt-2">
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

export default IslaiduIspl;
