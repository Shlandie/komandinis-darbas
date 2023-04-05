import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";


function PajamuIsplIrasas(props) {
    let { id, title, date, amount, deleteIncome, editIncome } = props;
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <div className="Roboto-condensed F-size-20 Line-height-23">
                        {title}
                    </div>
                    <div className="Roboto F-size-20 Line-height-23">
                        {date}
                    </div>
                </div>
                <div className="d-flex">
                    <div className="Roboto-condensed F-size-22 text-success pt-2">
                        {amount} eur
                    </div>
                    <button onClick={() => editIncome(id)} className="btn Crud-btn Edit-btn Bg-light-blue">Edit</button>
                    <button onClick={() => deleteIncome(id)} className="btn Crud-btn Del-btn Bg-light-red">Delete</button>
                </div>
            </div>
        </>
    );
}

export default PajamuIsplIrasas;
