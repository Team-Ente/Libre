import React from 'react';
import './AdvancedSearch.css';
import DropdownSearch from '../../Components/DropdownSearch/DropdownSearch';
function AdvancedSearch() {
  return (
    <div>
        <div className="filter">
          <DropdownSearch />
          <DropdownSearch />
          <DropdownSearch />
          <DropdownSearch />

        </div>
    </div>
  )
}

export default AdvancedSearch