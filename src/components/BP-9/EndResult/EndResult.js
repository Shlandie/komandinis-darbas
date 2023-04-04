import React from 'react';
import BP9buttons from '../Parts/buttons1/BP9buttons';
import SearchBP9 from '../Parts/Search2/SearchBP9';
import NewPostBP3 from '../Parts/NewPost3/NewPostBP3';
import ListBP9 from '../Parts/theList4/ListBP9';
import './EndResultBP9.css';
// import { useRef } from 'react';

export default function EndResultBP9() {
  return (
    <div className='EndResultBP9Container fontBP9' /* ref={EndResultBP9Container} */>
      <div className='EndResultBP9-flex'>
        <div><BP9buttons /></div>
        <div><SearchBP9 /></div>
        <div><NewPostBP3 /></div>
      </div>
      <div className=''><ListBP9 /> </div>
    </div>
  )
}
