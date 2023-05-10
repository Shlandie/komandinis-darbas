import React from 'react';
import './SearchBP9.css';
import '../../BP9global.css';
import {RxTriangleDown} from 'react-icons/rx';



export default function SearchBP9() {
  return (
    <div className='BP9container2 fontClr fs-20 BP9-child2'>
        <h3 className='BP9-2-heading fs-25'>Paieška</h3>

        <select className="BP9selectContainer BP9clrGray" aria-label="Default select example" id="programSelect" name="programSelect" required>
          <option defaultValue disabled>Kategorija</option>
          <option>Transportas</option>
          <option>Maistas ir gėrimai</option>
          <option>Pramogos</option>
          <option>Mokesčiai</option>
          <option>Paslaugos</option>
          <option>Pirkiniai ir daiktai</option>
          <option>Kitos išlaidos</option>
          <div className='icon-size iconGray'><RxTriangleDown /></div>  
        </select>

        <div className='fontClr BP9button'>Ieškoti</div>
    </div>
  )
}
