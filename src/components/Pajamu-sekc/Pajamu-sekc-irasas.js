import React from 'react';


function PajamuSekcIrasas(props) {
    let {id, pavadinimas, data, suma} = props;
  return (
    <div className="d-flex justify-content-between P-20">
        <div>
            <div className="Roboto-condensed Font-20">{pavadinimas}</div>
            <div className="Roboto">{data}</div>
        </div>
        <div className="d-flex">
            <div className="Roboto-condensed Font-22 text-success pt-2 pe-2">{suma}eur</div>
        </div>
    </div>
  )
}

export default PajamuSekcIrasas;