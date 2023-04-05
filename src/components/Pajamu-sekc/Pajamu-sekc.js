import React from "react";
import "./Pajamu-sekc.css";
import PajamuSekcIrasas from "./Pajamu-sekc-irasas";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes, Link } from "react-router-dom";
import PajamuIspl from "../Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";

function PajamuSekc() {
    let irasai = [
        {
            id: 1,
            pavadinimas: "Alga",
            data: "2023-02-15",
            suma: 800,
        },
        {
            id: 2,
            pavadinimas: "Dovana",
            data: "2023-02-20",
            suma: 30,
        },
        {
            id: 3,
            pavadinimas: "Algos priedas",
            data: "2023-02-15",
            suma: 150,
        },
        {
            id: 4,
            pavadinimas: "Algos priedas",
            data: "2023-02-15",
            suma: 150,
        },
    ];
    let visiIrasai = irasai.map((irasas) => {
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
    let bendraSuma = irasai.reduce((accum, irasas) => accum + irasas.suma, 0);
    return (
        <>
            <div class="col-4 Container">
                <div class="d-flex justify-content-between P-48">
                    <div className="Roboto-condensed Font-25 mt-1">Pajamos</div>
                    <div className="Roboto-condensed Font-30">{bendraSuma}eur</div>
                </div>
                <div className="Scroll">{visiIrasai}</div>
                <button type="button" class="Button Roboto-condensed Font-25">
                    <Link class="nav-link" to="/pajamu-isplestine">
                        Išskleisti
                    </Link>
                </button>
            </div>
            <Routes>
                <Route path="/pajamu-isplestine" element={<PajamuIspl />} />
            </Routes>
        </>
    );
}

export default PajamuSekc;
