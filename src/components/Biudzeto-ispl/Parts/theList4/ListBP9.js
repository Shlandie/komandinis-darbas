import React from 'react';
import './ListBP9.css';
import '../../BP9global.css';
import ExpenseBoxesBP9 from './ExpenseBoxesBP9/ExpenseBoxesBP9';

export default function ListBP9() {
  return (
    // Container 1
    <div className='BP9container4 fontClr BP9-child4'>
      <button className="btn F-size-20 BP9-btnX">X</button>
      <h3 className='BP9heading fs-25'>Biudžetas</h3>

      <div className='BP9-ListContainer'>
    
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      <ExpenseBoxesBP9 />
      </div>

  
    </div>
  )
}
