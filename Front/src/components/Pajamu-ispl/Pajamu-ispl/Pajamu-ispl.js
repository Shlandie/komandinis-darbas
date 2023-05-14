import React from "react";
import PajamuIsplIrasas from "../Pajamu-ispl-irasas/Pajamu-ispl-irasas";
import "../Pajamu-ispl/Pajamu-ispl.css";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../Delete-popup/Dialog";
import Navigation from "../../Navigation/Navigation";
import '../Pajamu-ispl/Pajamu-ispl-grid.css'
import { Link } from "react-router-dom";
import moment from 'moment';

const url = "http://localhost:4000/api/v1/incomes";

function PajamuIspl() {
    const [incomes, setIncomes] = useState([]);

    const [titleInput, setTitleInput] = useState("");
    const [dateInput, setDateInput] = useState(moment().format("YYYY-MM-DD"));
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

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setIncomes(data.data.earnings);
    };
    useEffect(() => {
        getData();
    }, []);

    const deleteIncomeBackEnd = async (id) =>{
        const remove = await fetch(url + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });
    };

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
            deleteIncomeBackEnd(idProductRef.current);
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditIncome = (id) => {
        setEditIncome(true);
        let findIncome = incomes.find((income) => income._id == id);
        //console.log(findIncome);
        setTitleInputOnEdit(findIncome.name);
        setDateInputOnEdit(findIncome.date);
        setAmountInputOnEdit(findIncome.amount);
        setUpdateIncome(findIncome);
    };

    const handleUpdateIncome = ({ id }) => {
        let newIncomesList = incomes.map((income) => {
            if (income._id == id) {
                return {
                    name: titleInputOnEdit,
                    date: dateInputOnEdit,
                    amount: amountInputOnEdit,
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
                amountInput == 0
            ) {
                setError(true);
            } else {
                let newIncome = {
                    name: titleInput,
                    date: dateInput,
                    amount: amountInput,
                };
                //console.log(newIncome)
                setIncomes((oldList) => [...oldList, newIncome]);
                //console.log(incomes)
                setTitleInput("");
                setDateInput(moment().format("YYYY-MM-DD"));
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
                id={income._id}
                name={income.name}
                date={income.date}
                amount={income.amount}
                deleteIncome={handleDeleteIncome}
                editIncome={handleEditIncome}
            />
        );
    });

    return (
        <>
            <div className="g-0 Income-wrapper gridParent-0">
                <Navigation />
                <div className="row d-flex g-0  IncomeNav gridChild-1 Roboto-condensed F-size-20">
                    <Link to='/pajamu-isplestine' className='BP9-btn colorAnchored BP9-selectedbtn'>
                        <div>Pajamos</div> </Link>

                    <Link to='/islaidu-isplestine' className='BP9-btn colorAnchored'>
                        <div>Išlaidos</div> </Link>

                    <Link to='/biudzeto-isplestine' className='BP9-btn colorAnchored'>
                        <div>Biudžetas</div> </Link>
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
                            <div className="">
                                <input
                                    type="date"
                                    className="form-control IncomeNewEntry-input F-size-20"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
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
                                <div className="">
                                    <input
                                        onChange={(e) =>
                                            setTitleInput(e.target.value)
                                        }
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
                                    <div className="Error-msg pt-1 ">
                                        Šis laukelis yra privalomas
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div className="">
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
                                <div className="">
                                    <input
                                        onKeyPress={(e) => {
                                            if (e.key === "-" || e.key === "+")
                                                e.preventDefault();
                                        }}
                                        onChange={(e) => {
                                            const regex =
                                                /^(?!00)[0-9]{0,10}(?:\.[0-9]{1,2})?$/;
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
                                </div>
                                {error && amountInput.length <= 0 ? (
                                    <div className="Error-msg pt-1">
                                        Šis laukelis yra privalomas
                                    </div>
                                ) : (
                                    ""
                                )}
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue"
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
                                    <div className="">
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
                                            className="form-control IncomeNewEntry-input F-size-20"
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
                                    <div className="">
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
                                        />
                                    </div>
                                    {error && dateInputOnEdit.length <= 0 ? (
                                        <div className="Error-msg">
                                            Šis laukelis yra privalomas
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="">
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
                                            className="form-control IncomeNewEntry-input F-size-20"
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
                                            className="btn F-size-20 Roboto-condensed Main-btn3 Bg-light-blue Edit-btn me-2"
                                            data-bs-target="#exampleModalToggle2"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Patvirtinti
                                        </button>
                                        <button
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

export default PajamuIspl;
