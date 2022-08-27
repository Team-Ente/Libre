import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import './logo.css';

function logo() {
  return (
    <div className='parent-logo'>
      <div class="child1">
        <i className='libre-icon'><IcoIcons.ImBooks /></i>
      </div>
      <div class="child2">
        Libre
      </div>
    </div>

  )
}

export default logo