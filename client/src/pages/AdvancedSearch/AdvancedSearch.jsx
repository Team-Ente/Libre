import React from 'react';
import './AdvancedSearch.css';
import DropdownSearch from '../../Components/DropdownSearch/DropdownSearch';

const language = [
  { label: 'Bengali', value: 'Bengali' },
  { label: 'English', value: 'English' },
];

const publication_date = [
  { label: '2019', value: '2019' },
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
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
    <div>
        <div className="filter">
          <i><DropdownSearch dat={language} plc="Language" mul={false}/></i>
          <i><DropdownSearch dat={author} plc="Author" mul={true}/></i>
          <i><DropdownSearch dat={topic} plc="Topic" mul={true}/></i>
          <i><DropdownSearch dat={publisher} plc="Publisher" mul={false}/></i>
          <i><DropdownSearch dat={publication_date} plc="Publication Date" mul={false}/></i>
        </div>
    </div>
  )
}

export default AdvancedSearch