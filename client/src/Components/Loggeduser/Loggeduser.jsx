import React from 'react';
import { useState } from 'react';
import './Loggeduser.css';;


function Loggeduser() {

        const [isActive, setIsActive] = useState(false);

        const logout = async () => {
                fetch('http://localhost:3050/logout', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        },
                        credentials: 'include' 
                });
        }

        return (
        <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Welcome, Saikat</div>
                {isActive && 
                <div className="dropdown-content">
                        <a href="/settings" className="dropdown-item">
                                Settings
                        </a>
                        <a href='/' onClick={logout} className="dropdown-item">
                                Log out
                        </a>
                </div>}
        </div>
        );
}
export default Loggeduser