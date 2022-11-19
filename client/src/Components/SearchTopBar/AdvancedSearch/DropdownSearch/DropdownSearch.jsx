import React from 'react';
import Select from 'react-select';
import './DropdownSearch.css';

function DropdownSearch(props) {
        return (
                <div className='dropitems'>
                        <Select options={props.dat} placeholder={props.plc} className='dropitem'
                        isMulti={props.mul}
                        />                     
                </div>
        )
}

export default DropdownSearch