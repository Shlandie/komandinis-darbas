import React from "react";
import PajamuIsplIrasas from "../Pajamu-ispl-irasas/Pajamu-ispl-irasas";
import "../Pajamu-ispl/Pajamu-ispl.css";
import PajamuSekc from "../../Pajamu-sekc/Pajamu-sekc";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    const [titleInput, setTitleInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [editIncome, setEditIncome] = useState(false);
    const [updateIncome, setUpdateIncome] = useState({});

    const deleteIncome = (id) => {
        setIncomes(incomes.filter((income) =>
            income.id !==id
        ));
    };

    const handleEditIncome = (id) => {
        setEditIncome(true);
        let findIncome = incomes.find(income => income.id == id);
        //console.log(findIncome);
        setTitleInput(findIncome.incomeTitle);
        setDateInput(findIncome.incomeDate);
        setAmountInput(findIncome.incomeAmount);
        setUpdateIncome(findIncome);
    };

    const handleUpdateIncome = ({id}) => {
        let newIncomesList = incomes.map((income) => {
            if(income.id == id){
                return {id: uuidv4(), incomeTitle: titleInput, incomeDate: dateInput, incomeAmount: amountInput};
            }
            return income;
        });
        setIncomes(newIncomesList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editIncome){
            let newIncome = {id: uuidv4(), incomeTitle: titleInput, incomeDate: dateInput, incomeAmount: amountInput}
            //console.log(newIncome)
            setIncomes((oldList) => [...oldList, newIncome]);
            //console.log(incomes)
            setTitleInput('');
            setDateInput('');
            setAmountInput('');
        } else {
            handleUpdateIncome(updateIncome);
            setTitleInput('');
            setDateInput('');
            setAmountInput('');
        }
    }

    let list = incomes.map((income) => {
        return (
            <PajamuIsplIrasas
                key={uuidv4()}
                id={income.id}
                title={income.incomeTitle}
                date={income.incomeDate}
                amount={income.incomeAmount}
                deleteIncome={deleteIncome}
                editIncome={handleEditIncome}
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
                            <h4 className="Roboto-condensed F-size-25 IncomeSearch-title">
                                Paieška
                            </h4>
                            <form>
                                <div class="mb-2">
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
                    <div className="row gap-2 g-0 ">
                        <div className="col p-5 IncomeNewEntry">
                            <h4 className="Roboto-condensed F-size-25 IncomeNewEntry-title">
                                Naujas Įrašas
                            </h4>
                            <form onSubmit={handleSubmit}>
                                
                                <div class="mb-2">
                                    <input
                                        onChange={(e) => setTitleInput(e.target.value)}
                                        required
                                        type="text"
                                        id="titleInput"
                                        name="titleInput"
                                        value={titleInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Pavadinimas"
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        onChange={(e) => setDateInput(e.target.value)}
                                        type="date"
                                        id="dateInput"
                                        name="dateInput"
                                        value={dateInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        onChange={(e) => setAmountInput(e.target.value)}
                                        type="number"
                                        id="amountInput"
                                        name="amountInput"
                                        value={amountInput}
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Suma"
                                    />
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
                        X
                    </button>
                    <div className="d-flex justify-content-between mb-4">
                        <h4 className="Roboto-condensed F-size-25">Pajamos</h4>
                    </div>
                    {list}
                </div>
            </div>
        </>
    );
}

export default PajamuIspl;
