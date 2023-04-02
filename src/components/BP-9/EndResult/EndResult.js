import React from 'react';
import BudgetBP9 from '../Parts/buttons1/BudgetBP9';
import SearchBP9 from '../Parts/Search2/SearchBP9';
import NewPostBP3 from '../Parts/NewPost3/NewPostBP3';
import ListBP9 from '../Parts/theList4/ListBP9';
import './EndResultBP9.css';

export default function EndResultBP9() {
  return (
    <div className='EndResultBP9-container'>
      <div className='EndResultBP9-flex'>
        <div><BudgetBP9 /></div>
        <div><SearchBP9 /></div>
        <div><NewPostBP3 /></div>
      </div>
      <div className=''><ListBP9 /> </div>
    </div>
  )
}
