import React from 'react'
import Logo2 from "../Logo2/Logo2"
import Loggeduser from "../Loggeduser/Loggeduser"
import './ReaderTopbar.css'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
function ReaderTopbar() {
  return (
    <div>
        <div className='usertopbar'>
            <Link to='/book'><i className='backicon'><BiArrowBack /></i></Link>
            <Loggeduser />
        </div>
    </div>
  )
}

export default ReaderTopbar