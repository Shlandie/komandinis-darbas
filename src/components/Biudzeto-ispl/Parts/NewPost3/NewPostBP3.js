import React from 'react';
import '../../BP9global.css';
import './NewPostBP3.css';
import {RxTriangleDown} from 'react-icons/rx';


export default function NewPostBP3() {
  return (
    <div className='BP9container3 fontClr fs-20 BP9-child3'>
        <h3 className='BP9-3-heading fs-25'>Naujas įrašas</h3>
            <div className='BP9clrGray'>
                <div className='BP9selectContainer'><span className=''>Kategorija</span><div className='icon-size'><RxTriangleDown /></div></div>
                <div className='BP9selectContainer my-20'><span className=''>Spalva</span><div className='icon-size'><RxTriangleDown /></div></div>
                <span className='BP9selectContainer'>Suma</span>
            </div>

        <div className='fs-32px fontClr BP9button'>Pridėti įrašą</div>
    </div>
  )
}
