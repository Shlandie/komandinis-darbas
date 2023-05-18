import React from 'react';
import './BP9buttons.css';
import '../../BP9global.css';
import { Link } from 'react-router-dom';

export default function BP9buttons() {
  return (
    <div className="row d-flex g-0  IncomeNav gridChild-1 Roboto-condensed F-size-20">
                    <Link to='/pajamu-isplestine' className='BP9-btn colorAnchored'>
                        <div>Pajamos</div> </Link>

                    <Link to='/islaidu-isplestine' className='BP9-btn colorAnchored'>
                        <div>Išlaidos</div> </Link>

                    <Link to='/biudzeto-isplestine' className='BP9-btn colorAnchored BP9-selectedbtn'>
                        <div>Biudžetas</div> </Link>
                </div>
  )
}
