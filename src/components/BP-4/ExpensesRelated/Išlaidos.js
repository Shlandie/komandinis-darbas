import React from 'react';
import './Išlaidos.css';
import '../Budget/Biudžetas.css';

export default function Išlaidos() {
  return (
    <div className='expenses-container'>
        <div className='scrollbar-trackDot'></div>

        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span>Transportas</span> <span className='pe-2'>150 eur</span></h3>
            
            <div className='bar'>
                <div className='blueBar barFontSize d-flex align-items-center p-3'>85%</div>
            </div>
        </div>
      
        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span>Maistas</span> <span className='pe-2'>200 eur</span></h3>
            
            <div className='bar'>
                <div className='greenBar barFontSize d-flex align-items-center p-3'>50%</div>
            </div>
        </div>

        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span>Sportas</span> <span className='pe-2'>100 eur</span></h3>
            
            <div className='bar'>
                <div className='redBar barFontSize d-flex align-items-center p-3'>20%</div>
            </div>
        </div>

    </div>
  )
}
