import React, {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import { Link } from 'react-router-dom';
// Anchor tags will reload the page and re-render all the components. While <Link> and <NavLink> 
// will only re-render updated components matched with the URL path of the Route without reloading. 
// It helps the Single-Page Applications to work faster while routing.
import { sidebarData } from './SidebarData';
import './Sidebar.css'
// import {IconContext} from 'react-icons';

function Sidebar(props) {
    
    const [sidebar, setSidebar] = useState(
        JSON.parse(localStorage.getItem('sidebar-is-open')) || false); // sidebar state initially set to false
    const showSidebar = () => {
        setSidebar(!sidebar); // function to toggle the state of the sidebar
        props.reloadIframe();
    }
    const data = props.toc ? props.toc : sidebarData;

    useEffect(() => {
        localStorage.setItem('is-open', JSON.stringify(sidebar));
    }, [sidebar]);

    return (
        <div className={sidebar ? 'scrollable-sidebar-active' : 'scrollable-sidebar'}>
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
                <ul className='nav-menu-items' >
                <p className='Table-header'>Chapters</p>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className="nav-text" onClick={() => {
                                props.navigateToChapter(item.id)
                            }}>
                                <span>{item.title}</span>
                                
                            </li>
                        )
                    })}
                </ul>
            
            </nav>
    </div>
  )
}

export default Sidebar