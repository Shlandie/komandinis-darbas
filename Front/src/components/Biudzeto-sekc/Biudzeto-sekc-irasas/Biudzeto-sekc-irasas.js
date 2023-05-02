import React from 'react';
import './Biudzeto-sekc-irasas.css';
import '../Biudzeto-sekc/Biudzeto-sekc';

export default function BiudzetoSekcIrasas() {
  return (
    <div className='expenses-container'>
        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span className='fs-20'>Transportas</span> <span className='pe-2 fs-22'>150 eur</span></h3>
            
            <div className='bar'>
                <div className='blueBar'> </div>
            </div>
        </div>
      
        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span className='fs-20'>Maistas</span> <span className='pe-2 fs-22'>200 eur</span></h3>
            
            <div className='bar'>
                <div className='greenBar'> </div>
            </div>
        </div>

        <div className='expense-box'>
            <h3 className='d-flex justify-content-between'><span className='fs-20'>Sportas</span> <span className='pe-2 fs-22'>100 eur</span></h3>
            
            <div className='bar'>
                <div className='redBar'> </div>
            </div>
        </div>

    </div>
  )
}
