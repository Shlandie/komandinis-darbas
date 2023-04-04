import React from 'react';
import '../../style.css';
import './NewPostBP3.css';


export default function NewPostBP3() {
  return (
    <div className='BP9container3 fontClr'>
        <h3 className='BP9-3-heading fs-35px'>Naujas įrašas</h3>
            <div className='BP9clrGray fs-30px'>
                <div className='BP9selectContainer'><span className=''>Kategorija</span><div className='BP9selectBtn'></div></div>
                <div className='BP9selectContainer my-33px'><span className=''>Spalva</span><div className='BP9selectBtn'></div></div>
                <span className='BP9selectContainer'>Suma</span>
            </div>

        <div className='fs-32px fontClr BP9button'>Pridėti įrašą</div>
    </div>
  )
}
