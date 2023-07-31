import React from 'react';
import {useRef} from 'react';
import "./NavBar.css";
import logo from './myHealthLogo.png'
import {FaTimes, FaBars} from "react-icons/fa"
 

function NavBar() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Test Results</a>
            <a href="/#">Visits</a>
            <button className="nav-btn nv-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>

        <button className="nav-btn nv-close-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
    
);

}

export default NavBar;