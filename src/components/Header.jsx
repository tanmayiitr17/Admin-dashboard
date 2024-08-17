import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <img src="https://synthiq.io/wp-content/uploads/2024/02/Synthiq-Logo-Header.png" style={{width:"15%",height:"20%"}}/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
