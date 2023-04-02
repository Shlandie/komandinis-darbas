import React from 'react';
import './BudgetBP4.css';
import Expenses from '../ExpensesRelated/Expenses';

export default function BudgetBP4() {
  return (
    <div className='budget-container'>
      <div className='heading'>Biudžetas</div>
      <div><Expenses /></div>
      
      <button className='button button-fs'>Išskleisti</button>
    </div>
  )
}
