import React from "react";
import "./Pajamu-sekc.css";
import { Link } from "react-router-dom";

function PajamuSekc() {
    return (
        <div class="col-4 rounded-3 p-4 Container">
            <h5 class="d-flex justify-content-between">
                <div>Pajamos</div>
                <div>900eur</div>
            </h5>
            <div class="d-flex justify-content-between mt-1 mb-1">
                <div>
                    Pavadinimas<small class="fw-light">data</small>
                </div>
                <div class="text-success">suma</div>
            </div>
            <div class="d-flex justify-content-between mt-1 mb-1">
                <div>
                    Pavadinimas<small class="fw-light">data</small>
                </div>
                <div class="text-success">suma</div>
            </div>
            <button type="button" class="btn btn-outline-primary">
                <Link className="nav-link" to="/pajamu-isplestine">
                Išskleisti
                </Link>
            </button>
        </div>
    );
}

export default PajamuSekc;
