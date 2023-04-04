import React from 'react';
import './BudgetBP4.css';
import ExpensesBP4 from '../ExpensesRelated/Expenses';

export default function BudgetBP4() {
  return (
    <div className='budget-container'>
      <div className='heading fs-25'>Biudžetas</div>
      <div><ExpensesBP4 /></div>
      
      <button className='button button-fs fs-20'>Išskleisti</button>
    </div>
  )
}
