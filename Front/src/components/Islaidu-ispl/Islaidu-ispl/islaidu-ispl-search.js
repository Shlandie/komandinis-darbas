
import React from 'react';

import { useState, useRef } from "react";


function ExpenceSearchBar(props) {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [filteredExpences, setFilteredExpences] = useState([]);
    const [dateInput, setDateInput] = useState("");
    const [endDateInput, setEndDateInput] = useState("");
    const [startDateInput, setStartDateInput] = useState('');
    

    const filterExpences = (query, category, date,  startDate, endDate) => {
        const filtered = props.expences.filter(
          (expence) =>
            expence.expenceTitle.toLowerCase().includes(query.toLowerCase()) &&
            (category === "visos kategorijos" || expence.expenceCategory === category) &&
            (!date || new Date(expence.expenceDate) >= new Date(date)) &&
            (!startDate || new Date(expence.expenceDate) >= new Date(startDate)) &&
            (!endDate || new Date(expence.expenceDate) <= new Date(endDate))
        );
        console.log(filtered);

        props.onFilterExpences(filtered);
      };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        console.log("Category:", category);
        setCategoryInput(category);
      };

      const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        console.log("Query:", query);
      };

       const handleDateChange = (e) => {
        const date = e.target.value;
        setDateInput(date);
      };

      const handleStartDateChange = (e) => {
        const startDate = e.target.value;
        setStartDateInput(startDate);
      };

      const handleEndDateChange = (e) => {
        const endDate = e.target.value;
        setEndDateInput(endDate);
      };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        filterExpences(searchQuery, categoryInput, dateInput,  startDateInput, endDateInput);
      };

      console.log(searchQuery, filteredExpences);
      
      
  
  return (
    <div className="row gap-2 g-0 gridChild-2">
  <div className="IncomeSearch">
    <h4 className="Roboto-condensed F-size-25 ExpenceSearch-title">
      Paieška
    </h4>
    <form onSubmit={handleSearchSubmit}>
    <div className="mb-2">
            <input
              type="date"
              className="form-control IncomeNewEntry-input F-size-20"
              placeholder="Pradžios data"
              value={startDateInput}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="date"
              className="form-control IncomeNewEntry-input F-size-20"
              placeholder="Pabaigos data"
              value={endDateInput}
              onChange={handleEndDateChange}
            />
      </div>
      <select
        className="form-select IncomeNewEntry-input F-size-19 Roboto-condensed"
        aria-label="Default select example"
        id="programSelect"
        name="programSelect"
        onChange={handleCategoryChange}
        value={categoryInput}
        required
      >
        <option defaultValue disabled>Pagal kategoriją</option>
        <option value="Transportas">Transportas</option>
        <option value="Maistas">Maistas</option>
        <option value="Pramogos">Pramogos</option>
        <option value="Mokesčiai">Mokesčiai</option>
        <option value="Paslaugos">Paslaugos</option>
        <option value="Pirkiniai ir daiktai">Pirkiniai ir daiktai</option>
        <option value="Kitos išlaidos">Kitos išlaidos</option>
      </select>
      <button
        type="submit"
        className="btn F-size-20 Roboto-condensed Main-btn Bg-light-blue mt-2"
      >
        Ieškoti
      </button>
      </form>
      
     

     </div>
    </div>
  );
}
export default ExpenceSearchBar;