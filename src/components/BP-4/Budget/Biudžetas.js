import React from 'react';
import './Biudžetas.css';
import Išlaidos from '../ExpensesRelated/Išlaidos';

export default function Biudžetas() {
  return (
    <div className='budget-container'>
      <div className='heading'>Biudžetas</div>
      <div><Išlaidos /></div>
      
      <button className='button button-fs'>Išskleisti</button>
    </div>
  )
}
