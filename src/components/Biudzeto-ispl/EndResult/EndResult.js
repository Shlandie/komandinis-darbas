import React from 'react';
import BP9buttons from '../Parts/buttons1/BP9buttons';
import SearchBP9 from '../Parts/Search2/SearchBP9';
import NewPostBP3 from '../Parts/NewPost3/NewPostBP3';
import ListBP9 from '../Parts/theList4/ListBP9';
import './EndResultBP9.css';
// import { useRef } from 'react';

export default function EndResultBP9() {
  return (
    <div className='basic-gridBP9 fontBP9'>
                <div className='basic-gridBP9-child1'><BP9buttons /></div>
                <div className='basic-gridBP9-child2'><SearchBP9 /></div>
                <div className='basic-gridBP9-child3'><NewPostBP3 /></div>
                <div className='basic-gridBP9-child4'><ListBP9 /></div>
        </div>
  )
}
