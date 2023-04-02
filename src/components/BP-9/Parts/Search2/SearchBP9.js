import React from 'react';
import './SearchBP9.css';
import '../../style.css';


export default function SearchBP9() {
  return (
    <div className='BP9container2 fontClr'>
        <h3 className='BP9-2-heading fs-35px'>Paieška</h3>

        <div className='fs-30px BP9selectContainer'>
          <span className='BP9clrGray'>Pagal kategoriją</span>
          <div className='BP9selectBtn'></div>  
        </div>

        <div className='fs-32px fontClr BP9button'>Ieškoti</div>
    </div>
  )
}
