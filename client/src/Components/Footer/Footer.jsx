import React from 'react'
import './Footer.css'
function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div className='footer'>
        <p className='copyright'>Libre Ente ©{year}</p>
        
    </div>
  )
}

export default Footer