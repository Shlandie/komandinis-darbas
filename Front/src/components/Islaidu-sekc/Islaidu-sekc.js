import React from "react";
import ExpenseItem from "../Islaidu-sekc/Islaidu-sekc-irasas";
import './Islaidu-sekc.css';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function IslaiduSekc(props) {
  const { items } = props;
  if (!items || items.length === 0) {
    return <div>No expenses found.</div>;
  }
  return (
    <div className="Expenses-section BP38-child3" >
      <div className="main-expenses">
      <h5 className="d-flex justify-content-between">
        <div className="main-expence-header">Išlaidos</div>
        <div className="main-expence-sum">120eur</div>
      </h5>
      <div className="main-expence-box">
        {items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.expenceTitle}
            category={item.expenceCategory}
            date={item.expenceDate}
            amount={item.expenceAmount}
          />
        ))}
      </div>
        <Link class="nav-link" to="/islaidu-isplestine">
          <button type="button" className="expenses-extend-button">
            Išskleisti
          </button>
        </Link>
      </div>


      <form className="expences-addition">
        <div className="form-group main-form-name">
          <input type="text" class="form-control" id="expence-name" placeholder="Pavadinimas" />
        </div>

        <div >

          <select className="form-control" id="expence-category" >
            <option disabled selected>Kategorija</option>
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