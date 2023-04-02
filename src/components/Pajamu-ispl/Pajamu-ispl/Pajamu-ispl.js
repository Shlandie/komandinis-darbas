import React from "react";
import PajamuIsplIrasas from "../Pajamu-ispl-irasas/Pajamu-ispl-irasas";
import "../Pajamu-ispl/Pajamu-ispl.css";

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

    let list = incomeEntries.map((incomeEntry) => {
        return (
            <PajamuIsplIrasas
                key={incomeEntry.id}
                id={incomeEntry.id}
                title={incomeEntry.incomeTitle}
                date={incomeEntry.incomeDate}
                amount={incomeEntry.incomeAmount}
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
                            <form>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Pavadinimas"
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="date"
                                        class="form-control IncomeNewEntry-input F-size-20"
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="number"
                                        class="form-control IncomeNewEntry-input F-size-20"
                                        placeholder="Suma"
                                    />
                                </div>
                                <button
                                    type="submit"
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
