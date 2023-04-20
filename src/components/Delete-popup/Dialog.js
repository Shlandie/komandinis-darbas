import React from 'react';
import '../Delete-popup/Dialog.css';

function Dialog({ message, onDialog }) {
  return (
    <div className='Dialog-background' onClick={() => onDialog(false)}>
      <div className='Dialog-container' onClick={(e) => e.stopPropagation()}>
        <button onClick={() => onDialog(false)} type="button" className="btn-close Btn-x" aria-label="Close"></button>
        <div className='Dialog-title Roboto-condensed Font-25'>{message}</div>
        <div className='Buttons-container'>
          <button className='Btn-confirm Roboto-condensed Font-20' onClick={() => onDialog(true)}>Patvirtinti</button>
          <button className='Btn-close Roboto-condensed Font-20' onClick={() => onDialog(false)}>Atšaukti</button>
        </div>
      </div>
    </div>
  )
};

export default Dialog;