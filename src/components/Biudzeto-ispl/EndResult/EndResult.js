import React from 'react';
import BP9buttons from '../Parts/buttons1/BP9buttons';
import SearchBP9 from '../Parts/Search2/SearchBP9';
import NewPostBP3 from '../Parts/NewPost3/NewPostBP3';
import ListBP9 from '../Parts/theList4/ListBP9';
import './EndResultBP9.css';
import Navigation from '../../Navigation/Navigation';
// import { useRef } from 'react';

export default function EndResultBP9() {
  return (
        <div className='BP9-grid fontBP9'>
                <Navigation className="BP9-child0"/>
                <BP9buttons />
                <SearchBP9 />
                <NewPostBP3 />
                <ListBP9 />
        </div>
  )
}
