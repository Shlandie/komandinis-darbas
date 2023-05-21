import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function PajamuIsplIrasas(props) {
    let { id, name, date, amount, deleteIncome, editIncome } = props;
    return (
        <>
            <div className="d-flex justify-content-between IncomeEntries-item-row">
                <div className="d-flex justify-content-between IncomeEntries-fields">
                    <div>
                        <div className="Roboto-condensed F-size-20 Line-height-23">
                            {name}
                        </div>
                        <div className="Roboto F-size-20 Line-height-23">
                            {date}
                        </div>
                    </div>

                    <div className="Roboto-condensed F-size-22 text-success pt-2">
                        {amount} eur
                    </div>
                </div>

                <div className="d-flex justify-content-between IncomeEntries-buttons">
                    <button
                        onClick={() => editIncome(id)}
                        className="btn Crud-btn Edit-btn Bg-light-blue Icon"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        <FiEdit />
                    </button>
                    <button
                        onClick={() => deleteIncome(id)}
                        className="btn Crud-btn Del-btn Bg-light-red Icon"
                    >
                        <BsTrash />
                    </button>
                </div>
            </div>
        </>
    );
}

export default PajamuIsplIrasas;
