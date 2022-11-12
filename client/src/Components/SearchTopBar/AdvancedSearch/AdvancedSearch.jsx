import React from 'react';
import './AdvancedSearch.css';
import DropdownSearch from './DropdownSearch/DropdownSearch';

const language = [
  { label: 'Bengali', value: 'Bengali' },
  { label: 'English', value: 'English' },
];

const edition = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];


const author = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

const topic = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

const publisher = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

function AdvancedSearch() {
  return (
    <div className='advancedSearchblock'>
        <div className="filter">
          <i><DropdownSearch dat={language} plc="Language" mul={false}/></i>
          <i><DropdownSearch dat={author} plc="Author" mul={true}/></i>
          <i><DropdownSearch dat={topic} plc="Topic" mul={true}/></i>
          <i><DropdownSearch dat={publisher} plc="Publisher" mul={false}/></i>
          <i><DropdownSearch dat={edition} plc="Edition" mul={false}/></i>
        </div>
    </div>
  )
}

export default AdvancedSearch