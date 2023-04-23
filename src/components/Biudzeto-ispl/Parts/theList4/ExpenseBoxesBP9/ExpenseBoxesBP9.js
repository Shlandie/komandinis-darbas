import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function ExpenseBoxesBP9(props) {
    let { id, category, color, amount, deleteBudget, editBudget } = props;
    return (
        <div className="BP9-expensesContainer">
            <div className="mb-28px">
                <h3 className="d-flex justify-content-between">
                    <span className="fs-20">{category}</span>
                    <span className="fs-22 pe-2">{amount} eur</span>
                </h3>
                <div className="bar">
                    <div className={color + ' coloredBar'}> </div>
                </div>
            </div>
            {/* Buttons */}
            <div className="BP9List-btnContainer">
                <button
                    onClick={() => editBudget(id)}
                    className="BP9list-btn BP9list-btnBlue border-0"
                    data-bs-toggle="modal"
                    role="button"
                    href="#exampleModalToggle"
                >
                    <div className="icon-size">
                        <FiEdit />
                    </div>
                </button>
                <button
                    onClick={() => deleteBudget(id)}
                    className="BP9list-btn BP9list-btnRed border-0"
                >
                    <div className="icon-size">
                        <BsTrash />
                    </div>
                </button>
            </div>
        </div>
    );
}
