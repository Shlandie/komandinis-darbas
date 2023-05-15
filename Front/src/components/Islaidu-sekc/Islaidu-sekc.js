import React from "react";
import './Islaidu-sekc.css';
import { Link } from "react-router-dom";

function IslaiduSekc() {
  return (
    <div className="Expenses-section BP38-child3">
      <div className="main-expenses">
        <h5 className="d-flex justify-content-between">
          <div className="main-expence-header">Išlaidos</div>
          <div className="main-expence-sum">120eur</div>
        </h5>
        <div className="main-expence-box">
          <div className="d-flex justify-content-between mt-1 mb-1 P-20">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-1 mb-1 P-20">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-1 mb-1 P-20">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount ">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
          </div>
        </div>
        <Link className="nav-link" to="/islaidu-isplestine">
          <button type="button" className="expenses-extend-button">
            Išskleisti
          </button>
        </Link>
      </div>


      <form className="expences-addition">
        <div className="form-group main-form-name">
          <input type="text" className="form-control" id="expence-name" placeholder="Pavadinimas" />
        </div>

        <div >

          <select className="form-control" id="expence-category" >
            <option disabled defaultValue>Kategorija</option>
            <option>Transportas</option>
            <option>Maistas ir gėrimai</option>
            <option>Pramogos</option>
            <option>Mokesčiai</option>
            <option>Paslaugos</option>
            <option>Pirkiniai ir daiktai</option>
            <option>Kitos išlaidos</option>
          </select>
        </div>

        <div className="row">
          <div className="form-group col">
            <input type="number" className="form-control" id="expence-sum" placeholder="Suma" />
          </div>

          <div className="form-group col">
            <input type="date" className="form-control BP9clrGray" id="expence-date" placeholder="Enter date" />
          </div>
        </div>

        <button type="submit" className="btn  expense-submit-button BP9clrGray">Pridėti irašą</button>

      </form>

    </div>
  )
};
export default IslaiduSekc;