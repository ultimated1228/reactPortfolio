import React from 'react';
import './navbar.css';
import logo from '../../assets/logo-noBG.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="developer logo"  className='logo '/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Projects</Link>

            </div>

            <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg" />
                Contact me
            </button>

        </nav>
    )
}

export default Navbar