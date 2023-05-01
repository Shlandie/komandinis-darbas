import IslaiduIsplIrasas from "../Islaidu-ispl-irasas/Islaidu-ispl-irasas";
import React from 'react';

import { useState, useRef } from "react";

function ExpenceSearchBar(props) {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    const filterExpenses = (query, category) => {
        const filtered = props.expences.filter(
          (expense) =>
            expense.expenceTitle.toLowerCase().includes(query.toLowerCase()) &&
            (category === "visos kategorijos" || expense.expenceCategory === category)
        );
        console.log(filtered);

        setFilteredExpenses(filtered);
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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        filterExpenses(searchQuery, categoryInput);
      };

      console.log(searchQuery, filteredExpenses);
      
      
  
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
          value={searchQuery}
          onChange={handleSearchChange}
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
      <div className="filtered-expenses">
      {filteredExpenses.map((expense) => (
    <IslaiduIsplIrasas
      key={expense.id}
      id={expense.id}
      title={expense.expenceTitle}
      category={expense.expenceCategory}
      date={expense.expenceDate}
      amount={expense.expenceAmount}
      deleteExpence={props.deleteExpence}
      editExpence={props.editExpence}
    />
  ))}
</div>
     </div>
    </div>
  );
}
export default ExpenceSearchBar;