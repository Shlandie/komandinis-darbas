import React from 'react';
import '../../BP9global.css';
import './NewPostBP3.css';
import {RxTriangleDown} from 'react-icons/rx';


export default function NewPostBP3() {
  return (
    <div className='BP9container3 fontClr fs-20'>
        <h3 className='BP9-3-heading fs-25'>Naujas įrašas</h3>
        <div className='BP9Container3-1'>
            <select className='BP9selectContainer BP9clrGray' aria-label="Default select example" id="programSelect" name="programSelect" required>
              <option selected disabled>Kategorija</option>
              <option>Transportas</option>
              <option>Maistas ir gėrimai</option>
              <option>Pramogos</option>
              <option>Mokesčiai</option>
              <option>Paslaugos</option>
              <option>Pirkiniai ir daiktai</option>
              <option>Kitos išlaidos</option>
              <div className='icon-size'><RxTriangleDown /></div>
            </select>
            <div className='BP9selectContainer my-20'><span className=''>Spalva</span><div className='icon-size'><RxTriangleDown /></div></div>
            <span className='BP9selectContainer'>Suma</span>
        </div>

        <div className='fs-32px fontClr BP9button'>Pridėti įrašą</div>
        
    </div>
  )
}
