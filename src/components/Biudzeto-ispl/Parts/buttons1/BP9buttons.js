import React from 'react';
import './BP9buttons.css';
import '../../BP9global.css'

export default function BP9buttons() {
  return (
    <div className='BP9container1 fs-20'>
      <div className='BP9-btn'>Pajamos</div>
      <div className='BP9-btn'>Išlaidos</div>
      <div className='BP9-btn BP9-selectedbtn'>Biudžetas</div>
    </div>
  )
}
