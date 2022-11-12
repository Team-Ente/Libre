import React from 'react';
import './Discover.css';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as VsIcons from 'react-icons/vsc';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io5';
import Animation from '../Animation';
function Discover() {
  return (
    <Animation>
    <div>
      <h2 className='titleofcount'>Explore</h2>
      <div className='items'>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Architecture</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BiIcons.BiPaint /></i>
            <p>Art</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BiIcons.BiDna /></i>
            <p>Biology</p>
        </div>

        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBriefcase /></i>
            <p>Business</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsCodeSquare /></i>
            <p>Computer Science</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><SiIcons.SiAltiumdesigner /></i>
            <p>Design</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><AiIcons.AiOutlineLineChart /></i>
            <p>Economic</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><VsIcons.VscMortarBoard /></i>
            <p>Education</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><GrIcons.GrGlobe /></i>
            <p>History</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><MdIcons.MdTranslate /></i>
            <p>Language</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><FaIcons.FaBalanceScaleLeft /></i>
            <p>Law</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><IoIcons.IoBookOutline /></i>
            <p>Literature</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Mathematics</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Performing Arts</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Medicine</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Self Development</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Philosophy</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Physical Sciences</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Politics</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Psychology</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Social Sciences</p>
        </div>
        
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Study Aids</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Technology</p>
        </div>
        <div className='item'>
            <i className='itemIcon'><BsIcons.BsBuilding /></i>
            <p>Religion</p>
        </div>
      </div>  
    </div>
    </Animation>
  )
}

export default Discover