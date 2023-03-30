import React from "react";

function PajamuIsplIrasas(props) {
    let { id, title, date, amount } = props;
    
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <div className="Roboto-condensed F-size-28 Line-height-33">
                        {title}
                    </div>
                    <div className="Roboto F-size-23 Line-height-27">
                        {date}
                    </div>
                </div>
                <div className="d-flex">
                    <div className="Roboto-condensed F-size-30 text-success pt-2">
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
