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
                    <div className="row gap-2 g-0 mb-2">
                        <div className="col rounded-3 p-5 IncomeNav">
                            <h4 className="Roboto-condensed F-size-35">
                                Paieška
                            </h4>
                        </div>
                    </div>
                    <div className="row gap-2 g-0 mb-2">
                        <div className="col rounded-3 p-5 IncomeSearch">
                            <h4 className="Roboto-condensed F-size-35">
                                Paieška
                            </h4>
                        </div>
                    </div>
                    <div className="row gap-2 g-0 ">
                        <div className="col rounded-3 p-5 IncomeNewEntry">
                            <h4 className="Roboto-condensed F-size-35">
                                Naujas Įrašas
                            </h4>
                            <form>
                                <div class="mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <button type="submit" class="btn F-size-32 Roboto-condensed Main-btn Bg-light-blue">
                                    Pridėti irašą
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col rounded-3 p-5 IncomeEntries">
                    <div className="d-flex justify-content-between mb-4">
                        <h4 className="Roboto-condensed F-size-35">Pajamos</h4>
                    </div>
                    {list}
                </div>
            </div>
        </>
    );
}

export default PajamuIspl;
