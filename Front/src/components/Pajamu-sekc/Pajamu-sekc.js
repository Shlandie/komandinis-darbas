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
        console.log(data);
        setIncomes(data.earnings.allEarnings);
    };
    
    useEffect(() => {
        getData();
    }, []);

    console.log(incomes);

    {/*let visiIrasai = irasai.map((irasas) => {
        return (
            <PajamuSekcIrasas
                key={uuidv4()}
                id={irasas.id}
                pavadinimas={irasas.pavadinimas}
                data={irasas.data}
                suma={irasas.suma}
            />
        );
    });
let bendraSuma = irasai.reduce((accum, irasas) => accum + irasas.suma, 0);*/}
    return (
        <>
            <div class="Container BP38-child1">
                <div class="d-flex justify-content-between P-48">
                    <div className="Roboto-condensed Font-25 mt-1">Pajamos</div>
                    <div className="Roboto-condensed Font-30">{/*bendraSuma*/}eur</div>
                </div>
                <div className="Scroll">{/*visiIrasai*/}</div>

                <button type="button" class="Button Roboto-condensed Font-20">
                    <Link class="nav-link" to="/pajamu-isplestine">
                        Išskleisti
                    </Link>
                </button>
            </div>
        </>
    );
}

export default PajamuSekc;
