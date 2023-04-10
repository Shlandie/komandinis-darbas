import React from "react";
import './Islaidu-sekc.css';
import { Link } from "react-router-dom";

function IslaiduSekc() { 
 return(
    <div className="col-4   Expenses-section" >
      <div className="main-expenses">
        <h5 className="d-flex justify-content-between">
            <div className="main-expence-header">Išlaidos</div>
            <div className="main-expence-sum">120eur</div>
        </h5>
       <div className="main-expence-box">
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida1">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
        </div> 
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida2">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
        </div> 
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida3">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">Maistas</small></div>
            <div>
              <span className="d-flex  justify-content-end  main-expence-amount ">- 30 eur</span>
              <small className="fw-light main-expence-date">2023-03-10</small>
            </div>
        </div> 
       </div>  
        <button type="button" className="btn btn-outline-primary  expenses-extend-button">
            <Link class="nav-link" to="/islaidu-isplestine">
              Išskleisti
            </Link></button>
      </div>

      
         <form className="expences-addition">
           <div className="form-group main-form-name ">
            <input type="text" class="form-control" id="expence-name" placeholder="Pavadinimas"/>
           </div>

           <div className="form-group">
            
              <select className="form-control" id="expence-category" >
                <option disabled selected>Kategorija</option>
                <option>Kategorija 1</option>
                <option>Kategorija 2</option>
                <option>Kategorija 3</option>
              </select>
           </div>
           
           <div className="row">
            <div className="form-group col">
              <input type="number" className="form-control" id="expence-sum" placeholder="Suma"/>
            </div>

            <div className="form-group col">
              <input type="date" className="form-control" id="expence-date"  placeholder="Enter date"/>
            </div>
           </div>

           <button type="submit" className="btn btn-outline-primary  expense-submit-button">Pridėti irašą</button>

         </form>
      
    </div>
 )
};
export default IslaiduSekc;