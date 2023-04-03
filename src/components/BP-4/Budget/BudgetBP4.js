import React from 'react';
import './BudgetBP4.css';
import Expenses from '../ExpensesRelated/Expenses';
/* import { useState } from 'react';
import { useRef } from 'react'; */


export default function BudgetBP4() {
  // const [isActive, setIsActive] = useState(false);
  // function handleClick() {
    /* EndResultBP9Container.current.focus(); */

    
    /* event.currentTarget.classList.toggle('bg-success'); */
    /* setIsActive(current => !current); */
    /* const aa1 = document.getElementsByClassName('EndResultBP9Container');
    aa1.className.add('bg-warning'); */
    /* event.aa1.currentTarget.classList.toggle('bg-info');
    console.log(aa1); */

  // }


 
  return (
    <div className='budget-container'>
      <div className='heading'>Biudžetas</div>
      <div><Expenses /></div>
      
      <button className={`button button-fs `} >Išskleisti</button>
      {/* ${isActive ? 'bg-success' : ''} */}
      {/* onClick={handleClick} */}
    </div>
  )
}
