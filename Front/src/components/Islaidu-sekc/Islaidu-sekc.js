import React from "react";
import ExpenseItem from "../Islaidu-sekc/Islaidu-sekc-irasas";
import './Islaidu-sekc.css';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";





function IslaiduSekc() {
  
   
  const expenceEntries = [
    {
        id: 1,
        expenceTitle: "Maxima",
        expenceCategory: "Maistas",
        expenceDate: "2023-02-15",
        expenceAmount: 30,
    },
    {
        id: 2,
        expenceTitle: "IKI",
        expenceCategory: "Maistas",
        expenceDate: "2023-03-15",
        expenceAmount: 55,
    },
    {
        id: 3,
        expenceTitle: "Forum Cinema",
        expenceCategory: "Pramogos",
        expenceDate: "2023-02-15",
        expenceAmount: 15,
    },
    {
        id: 4,
        expenceTitle: "Maxima",
        expenceCategory: "Maistas",
        expenceDate: "2023-02-15",
        expenceAmount: 41,
    },
    {
        id: 5,
        expenceTitle: "Maxima",
        expenceCategory: "Maistas",
        expenceDate: "2023-02-15",
        expenceAmount: 25,
    },
];
       const [expences, setExpences] = useState(expenceEntries);
       const [expenceName, setExpenceName] = useState("");
       const [expenceCategory, setExpenceCategory] = useState("");
       const [expenceSum, setExpenceSum] = useState("");
       const [expenceDate, setExpenceDate] = useState("");
       const expenceNameInputRef = useRef(null);
       const [error, setError] = useState(false);



       const handleFormSubmit = (event) => {
        event.preventDefault();
        
        if (!expenceName || !expenceCategory || !expenceSum || !expenceDate) {
          setError(true);
          return;
        }
      
          
      
        // Create a new expense object
        const newExpense = {
          id: uuidv4(),
          expenceTitle: expenceName,
          expenceCategory: expenceCategory,
          expenceDate: expenceDate,
          expenceAmount: parseFloat(expenceSum),
        };
      
        // Update the expenses array using the previous state
        setExpences((prevExpences) => [...prevExpences, newExpense]);
      
        // Reset the form input values
        setExpenceName("");
        setExpenceCategory("");
        setExpenceSum("");
        setExpenceDate("");
      
        // Focus on the expense name input field
        expenceNameInputRef.current.focus();
        setError(false);
      };

      // count total amount
      const totalExpenseAmount = expences.reduce((total, expence) => {
        return total + expence.expenceAmount;
      }, 0);






      let ListItems = expences
      .sort((a, b) => new Date(b.expenceDate) - new Date(a.expenceDate))
      .map((expence) => {
    return(
    <ExpenseItem
      key={uuidv4()}
      title={expence.expenceTitle}
      category={expence.expenceCategory}
      date={expence.expenceDate}
      amount={expence.expenceAmount}
    />
    );
  });
  

  
  return (
    <div className="Expenses-section BP38-child3" >
      <div className="main-expenses">
      <h5 className="d-flex justify-content-between">
        <div className="main-expence-header">Išlaidos</div>
        <div className="main-expence-sum">{totalExpenseAmount}eur</div>
      </h5>
      <div className="main-expence-box">
        {ListItems}
      </div>
        <Link class="nav-link" to="/islaidu-isplestine">
          <button type="button" className="expenses-extend-button">
            Išskleisti
          </button>
        </Link>
      </div>


      <form className="expences-addition">
        <div className="form-group main-form-name">
          <input type="text" 
          className={`form-control ${error && !expenceName ? "is-invalid" : ""}`}
          id="expence-name" 
          placeholder="Pavadinimas" 
          value={expenceName}  
           onChange={(event) => setExpenceName(event.target.value)}
           ref={expenceNameInputRef}
           required                />
        </div>

        <div >

          <select className={`form-control ${error && !expenceCategory ? "is-invalid" : ""}`}
          id="expence-category" 
          value={expenceCategory}  
          onChange={(event) => setExpenceCategory(event.target.value)}
      required >
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
            <input 
             onChange={(e) => {  const regex = /^[0-9]{0,10}(\.[0-9]{0,2})?$/;
             if (regex.test(e.target.value)) { setExpenceSum(e.target.value);
             }
           }}
            type="number"
             className={`form-control ${error && !expenceSum ? "is-invalid" : ""}`}
             id="expence-sum" 
             placeholder="Suma"
             value={expenceSum}      
             />
             
   
          </div>

          <div className="form-group col">
            <input type="date" 
            className={`form-control BP9clrGray ${error && !expenceName ? "is-invalid" : ""}`}
            id="expence-date" 
            placeholder="Enter date"
            value={expenceDate} 
            onChange={(event) => setExpenceDate(event.target.value)}
            required/>
          </div>
        </div>

        <button onClick={handleFormSubmit} type="submit" className="btn  expense-submit-button BP9clrGray">Pridėti irašą</button>

      </form>

    </div>
  )
};
export default IslaiduSekc;