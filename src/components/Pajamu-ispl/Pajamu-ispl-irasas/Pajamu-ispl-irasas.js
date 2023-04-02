import React from "react";

function PajamuIsplIrasas(props) {
    let { id, title, date, amount } = props;
    
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
                    <button className="btn Crud-btn Edit-btn Bg-light-blue">Edit</button>
                    <button className="btn Crud-btn Del-btn Bg-light-red">Delete</button>
                </div>
            </div>
        </>
    );
}

export default PajamuIsplIrasas;
