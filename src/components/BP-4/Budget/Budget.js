import React from 'react';
import './Budget.css';
import Expenses from '../ExpensesRelated/Expenses';

export default function Budget() {
  return (
    <div className='budget-container'>
      <div className='heading'>Biudžetas</div>
      <div><Expenses /></div>
      
      <button className='button button-fs'>Išskleisti</button>
    </div>
  )
}
