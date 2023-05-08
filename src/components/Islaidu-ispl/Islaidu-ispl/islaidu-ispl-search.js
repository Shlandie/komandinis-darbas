
import React from 'react';

import { useState, useRef } from "react";
import DateRangePicker from '@mui/lab/DateRangePicker';

function ExpenceSearchBar(props) {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [filteredExpences, setFilteredExpences] = useState([]);
    const [dateInput, setDateInput] = useState("");
    const [dateRange, setDateRange] = useState({ start: null, end: null });

    const filterExpences = (query, category, date) => {
        const filtered = props.expences.filter(
          (expence) =>
            expence.expenceTitle.toLowerCase().includes(query.toLowerCase()) &&
            (category === "visos kategorijos" || expence.expenceCategory === category) &&
            (!date || new Date(expence.expenceDate) >= new Date(date))
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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        filterExpences(searchQuery, categoryInput, dateInput);
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
          placeholder="Paieška"
          value={dateInput}
          onChange={handleDateChange}
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
        <option selected disabled>Pagal kategoriją</option>
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