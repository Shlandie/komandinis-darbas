import React from "react";
import IslaiduIsplIrasas from "../Islaidu-ispl-irasas/Islaidu-ispl-irasas";
import "../Islaidu-ispl/Islaidu-ispl.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../Delete-popup/Dialog";

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
    const [editExpence, setEditExpence] = useState(false);
    const [updateExpence, setUpdateExpence] = useState({});
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false
      });

    const idProductRef = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
          message,
          isLoading
        });
    };

    const handleDeleteExpence = (id) => {
        handleDialog("Ar tikrai norite ištrinti?", true);
        idProductRef.current = id;
    };

    const areUSureDelete = (choose) => {
        if (choose) {
            setExpences(expences.filter((expense) => expense.id !==idProductRef.current));
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handleEditExpence = (id) => {
        setEditExpence(true);
        let findExpence = expences.find((expence) => expence.id == id);
        //console.log(findExpence);
        setTitleInput(findExpence.expenceTitle);
        setDateInput(findExpence.expenceDate);
        setAmountInput(findExpence.expenceAmount);
        setUpdateExpence(findExpence);
    };

    const handleUpdateExpence = ({ id }) => {
        let newExpencesList = expences.map((expence) => {
            if (expence.id == id) {
                return {
                    id: uuidv4(),
                    expenceTitle: titleInput,
                    expenceDate: dateInput,
                    expenceAmount: amountInput,
                };
            }
            return expence;
        });
        // setIncomes(newExpencesList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editExpence) {
            let newExpence = {
                id: uuidv4(),
                expenceTitle: titleInput,
                expenceDate: dateInput,
                expenceAmount: amountInput,
            };
            //console.log(newExpence)
            setExpences((oldList) => [...oldList, newExpence]);
            //console.log(expences)
            setTitleInput("");
            setDateInput("");
            setAmountInput("");
        } else {
            handleUpdateExpence(updateExpence);
            setTitleInput("");
            setDateInput("");
            setAmountInput("");
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
                <div className="col-4 IncomeSidebar">
                    <div className="row d-flex gap-2 g-0 mb-2 IncomeNav">
                        <div className="col ">
                            <button className="btn Main-btn Bg-light-blue Roboto-condensed F-size-20">
                                Pajamos
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn Main-btn Bg-light-blue Roboto-condensed F-size-20">
                                Išlaidos
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn Main-btn Bg-light-blue Roboto-condensed F-size-20">
                                Biudžetas
                            </button>
                        </div>
                    </div>
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
                                    <option defaultValue>Pagal kategoriją</option>
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
                {dialog.isLoading && (
                    <Dialog
                    onDialog={areUSureDelete}
                    message={dialog.message}
                    />
                )};
            </div>
        </>
    );
}

export default IslaiduIspl;
