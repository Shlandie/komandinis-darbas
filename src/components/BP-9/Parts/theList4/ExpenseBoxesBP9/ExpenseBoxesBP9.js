import React from 'react';


export default function ExpenseBoxesBP9() {
  return (
    <div className='BP9-expensesContainer'>
              <div className='mb-28px'>
                    <h3 className='BP9-expenseWidth d-flex justify-content-between'>
                      <span className='fs-20'>Transportas</span> 
                      <span className='fs-22 pe-2'>150 eur</span></h3>
                      <div className='bar'>
                        <div className='blueBar'> </div>
                      </div>
              </div>
              {/* Buttons */}
              <div className='d-flex'>
                  <div className='BP9-btn me-33px'>
                      <div className='BP9selectBtn'></div>
                  </div>
                  <div className='BP9-btn BP9-bgRed'>
                      <div className='BP9selectBtn'></div>
                </div>
              </div>
          </div>
  )
}
