import React from 'react';
import './SearchBP9.css';
import '../../BP9global.css';
import {RxTriangleDown} from 'react-icons/rx';



export default function SearchBP9() {
  return (
    <div className='BP9container2 fontClr fs-20 BP9-child2'>
        <h3 className='BP9-2-heading fs-25'>Paieška</h3>

        <div className='BP9selectContainer'>
          <span className='BP9clrGray'>Pagal kategoriją</span>
          <div className='icon-size iconGray'><RxTriangleDown /></div>  
        </div>

        <div className='fontClr BP9button'>Ieškoti</div>
    </div>
  )
}
