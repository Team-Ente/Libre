import React from 'react';
import { useState } from 'react';
import './Loggeduser.css';;


function Loggeduser() {
        const [isActive, setIsActive] = useState(false);
        return (
        <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Welcome, Boikot</div>
                {isActive && 
                <div className="dropdown-content">
                        <a href="/settings" className="dropdown-item">
                                Settings
                        </a>
                        <a href='/logout' className="dropdown-item">
                                Log out
                        </a>
                </div>}
        </div>
        );
}
export default Loggeduser