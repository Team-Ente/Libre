import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import { Link } from 'react-router-dom';
// Anchor tags will reload the page and re-render all the components. While <Link> and <NavLink> 
// will only re-render updated components matched with the URL path of the Route without reloading. 
// It helps the Single-Page Applications to work faster while routing.
import { sidebarData } from './SidebarData';
import './Sidebar.css'
// import {IconContext} from 'react-icons';

function Navbar() {
    
    const [sidebar, setSidebar] = useState(false); // sidebar state initially set to false
    const showSidebar = () =>setSidebar(!sidebar); // function to toggle the state of the sidebar
    
    return (
    <div>
            {/* Navbar */}
            <div className='navbar'>
                <Link to="#" className="menu-bars"> 
                    <FaIcons.FaBars onClick={showSidebar}/> 
                    {/* top left bar icon, a clickable react component */}
                </Link>
            </div>

            {/* Nav Menu */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
            {/* checks whether Nav-Menu is active or not */}
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            
            </nav>
    </div>
  )
}

export default Navbar