import React from "react";
import "./Biudzeto-sekc.css";
import BiudzetoSekcIrasas from "../Biudzeto-sekc-irasas/Biudzeto-sekc-irasas";
import { Link } from "react-router-dom";

export default function BiudzetoSekc() {
    return (
            <div className="budget-container BP38-child4">
                <div className="heading fs-25">Biudžetas</div>
                    <BiudzetoSekcIrasas />
                <button className="button button-fs fs-20 budget-main-btn">
                    <Link class="nav-link" to="/biudzeto-isplestine">
                        Išskleisti
                    </Link>
                </button>
        </div>
    );
}
