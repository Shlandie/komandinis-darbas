import React from "react";
import './Islaidu-sekc.css';

function IslaiduSekc() { 
 return(
    <div className="col   Expenses-section" >
      <div className="main-expenses">
        <h5 className="d-flex justify-content-between">
            <div className="main-expence-header">Išlaidos</div>
            <div className="main-expence-sum">120eur</div>
        </h5>
       <div className="main-expence-box">
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida1">
            <div className="main-expence-name">MAXIMA<small className="fw-light main-expence-category">kategorija</small></div>
            <div><span className="text-danger main-expence-amount">suma</span><small className="fw-light main-expence-date">data</small></div>
        </div> 
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida2">
            <div className="main-expence-name">Pavadinimas<small className="fw-light main-expence-category">kategorija</small></div>
            <div><span className="text-danger main-expence-amount">suma</span><small className="fw-light main-expence-date">data</small></div>
        </div> 
        <div className="d-flex justify-content-between mt-1 mb-1 Islaida3">
            <div className="main-expence-name">Pavadinimas<small className="fw-light main-expence-category">kategorija</small></div>
            <div><span className="text-danger main-expence-amount">suma</span><small className="fw-light main-expence-date">data</small></div>
        </div> 
       </div>  
        <button type="button" className="btn btn-outline-primary rounded-pill expenses-extend-button">Išskleisti</button>
      </div>

      
         <form className="expences-addition">

           <div className="form-group main-form-name ">
            <label htmlFor="expence-name"></label>
            <input type="text" class="form-control" id="expence-name" placeholder="Pavadinimas"/>
           </div>

           <div className="form-group">
            <label htmlFor="expence-category"></label>
              <select className="form-control" id="expence-category" >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
           </div>
           
           <div className="row">
            <div class="form-group col">
              <label htmlFor="expence-sum"></label>
              <input type="number" className="form-control" id="expence-sum" placeholder="Suma"/>
            </div>

            <div className="form-group col">
              <label htmlFor="expence-date"></label>
              <input type="date" className="form-control" id="expence-date"  placeholder="Enter date"/>
            </div>
           </div>

           <button type="submit" className="btn btn-outline-primary rounded-pill expense-submit-button">Pridėti irašą</button>

         </form>
      
    </div>
 )
};
export default IslaiduSekc;
