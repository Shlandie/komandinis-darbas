import React from "react";

function ExpenseItem(props) {
    const { title, category, date, amount } = props;
  
    return (
      <div className="d-flex justify-content-between mt-1 mb-1 P-20">
        <div className="main-expence-name">
          {title}
          <small className="fw-light main-expence-category">{category}</small>
        </div>
        <div>
          <span className="d-flex  justify-content-end  main-expence-amount">
            - {amount} eur
          </span>
          <small className="fw-light main-expence-date">{date}</small>
        </div>
      </div>
    );
  }
  export default ExpenseItem;