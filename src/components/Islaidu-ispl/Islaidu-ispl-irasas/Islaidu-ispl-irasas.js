import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function IslaiduIsplIrasas(props) {
    let { id, title, category, date, amount, deleteExpence, editExpence } =
        props;
    return (
        <>
            <div className="d-flex justify-content-between IncomeEntries-item-row">
                <div className="d-flex justify-content-between IncomeEntries-fields">
                    <div>
                        <div className="Roboto-condensed F-size-20 Line-height-23">
                            {title}
                        </div>
                        <div className="Roboto F-size-20 Line-height-23">
                            {category}
                        </div>
                    </div>
                    <div>
                        <div className="Roboto-condensed F-size-22 Line-height-23 text-danger text-end">
                            - {amount} eur
                        </div>
                        <div className="Roboto F-size-20 Line-height-23">
                            {date}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between IncomeEntries-buttons">
                    <button
                        onClick={() => editExpence(id)}
                        className="btn Crud-btn Edit-btn Bg-light-blue"
                        data-bs-toggle="modal"
                        role="button"
                        href="#exampleModalToggle"
                    >
                        <FiEdit />
                    </button>
                    <button
                        onClick={() => deleteExpence(id)}
                        className="btn Crud-btn Del-btn Bg-light-red"
                    >
                        <RiDeleteBinLine />
                    </button>
                </div>
            </div>
        </>
    );
}

export default IslaiduIsplIrasas;
