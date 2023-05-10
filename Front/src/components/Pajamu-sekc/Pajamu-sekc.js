import React from "react";
import "./Pajamu-sekc.css";
import PajamuSekcIrasas from "./Pajamu-sekc-irasas";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const url = "http://localhost:4000/api/v1/incomes";

function PajamuSekc() {
    const [incomes, setIncomes] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setIncomes(data.data.earnings);
    };
    useEffect(() => {
        getData();
    }, []);

    //console.log(incomes);

    let visiIrasai = incomes.map((income) => {
        return (
            <PajamuSekcIrasas
                key={uuidv4()}
                id={income._id}
                name={income.name}
                date={income.date}
                amount={income.amount}
            />
        );
    });

    let bendraSuma = incomes.reduce((accum, income) => accum + income.amount, 0);

    return (
        <>
            <div className="Container BP38-child1">
                <div className="d-flex justify-content-between P-48">
                    <div className="Roboto-condensed Font-25 mt-1">Pajamos</div>
                    <div className="Roboto-condensed Font-30">{bendraSuma}eur</div>
                </div>
                <div className="Scroll">{visiIrasai}</div>

                <Link className="nav-link" to="/pajamu-isplestine">
                    <button type="button" className="Button Roboto-condensed Font-20">
                        Išskleisti
                    </button>
                </Link>
            </div>
        </>
    );
}

export default PajamuSekc;
