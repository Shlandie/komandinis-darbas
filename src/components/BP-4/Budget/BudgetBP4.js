import React from "react";
import "./BudgetBP4.css";
import Expenses from "../ExpensesRelated/Expenses";
import { Link } from "react-router-dom";

export default function BudgetBP4() {
    return (
        <div className="budget-container">
            <div className="heading fs-25">Biudžetas</div>
            <div>
                <Expenses />
            </div>

            <button className="button button-fs fs-20">
                <Link class="nav-link" to="/biudzeto-isplestine">
                    Išskleisti
                </Link>
            </button>
        </div>
    );
}
