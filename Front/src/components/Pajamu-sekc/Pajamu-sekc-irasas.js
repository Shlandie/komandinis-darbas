import React from 'react';


function PajamuSekcIrasas(props) {
    let {id, name, date, amount} = props;
  return (
    <div className="d-flex justify-content-between P-20">
        <div>
            <div className="Roboto-condensed Font-20">{name}</div>
            <div className="Roboto">{date}</div>
        </div>
        <div className="d-flex">
            <div className="Roboto-condensed Font-22 text-success pt-2 pe-2">{amount}eur</div>
        </div>
    </div>
  )
}

export default PajamuSekcIrasas;