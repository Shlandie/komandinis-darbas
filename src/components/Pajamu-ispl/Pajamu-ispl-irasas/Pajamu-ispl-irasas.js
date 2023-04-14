import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function PajamuIsplIrasas(props) {
    let { id, title, date, amount, deleteIncome, editIncome } = props;
    return (
        <>
            <div className="d-flex justify-content-between IncomeEntries-item-row">
                <div className="d-flex justify-content-between IncomeEntries-fields">
                    <div>
                        <div className="Roboto-condensed F-size-20 Line-height-23">
                            {title}
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
                        className="btn Crud-btn Edit-btn Bg-light-blue"
                        data-bs-toggle="modal"
                        role="button"
                        href="#exampleModalToggle"
                    >
                        <FiEdit />
                    </button>
                    <button
                        onClick={() => deleteIncome(id)}
                        className="btn Crud-btn Del-btn Bg-light-red"
                    >
                        <RiDeleteBinLine />
                    </button>

                </div>
            </div>
        </>
    );
}

export default PajamuIsplIrasas;
