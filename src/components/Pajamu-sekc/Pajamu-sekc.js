import React from 'react';
import './Pajamu-sekc.css';

function PajamuSekc() {
  return (
    <div class="col rounded-3 p-4 Container">
        <h5 class="d-flex justify-content-between">
            <div>Pajamos</div>
            <div>900eur</div>
        </h5>
        <div class="d-flex justify-content-between mt-1 mb-1">
            <div>Pavadinimas<small class="fw-light">data</small></div>
            <div class="text-success">suma</div>
        </div>
        <div class="d-flex justify-content-between mt-1 mb-1">
            <div>Pavadinimas<small class="fw-light">data</small></div>
            <div class="text-success">suma</div>
        </div>
        <button type="button" class="btn btn-outline-primary">Išskleisti</button>
    </div>
  )
};

export default PajamuSekc;