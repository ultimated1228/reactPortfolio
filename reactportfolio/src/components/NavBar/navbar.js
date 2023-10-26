import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2-nobg.png';
import contactImg from "../../assets/comment.png"
import menu from '../../assets/burger-menu.svg'
import { Link } from 'react-scroll';
import { useState } from 'react';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="totalHeader">
            <nav id="navbar">
                <img src={logo} alt="developer logo" className='logo' />
                <div className="desktopMenu">
                    <Link className="desktopMenuListItem" activeClass='active' to='top' offset={-150} smooth={true} duration={500}>Home</Link>
                    <Link className="desktopMenuListItem" activeClass='active' to='intro' spy={true} offset={-90} smooth={true} duration={500}>About</Link>
                    <Link className="desktopMenuListItem" activeClass='active' to='skills' spy={true} offset={-90} smooth={true} duration={500}>Skills</Link>
                    <Link className="desktopMenuListItem" activeClass='active' to='projects' spy={true} offset={-90} smooth={true} duration={500}>Projects</Link>
                </div>

                <button className="desktopMenuBtn" onClick={() => {document.getElementById('contactSection').scrollIntoView({behavior: 'smooth'})}} >
                    <img src={contactImg} alt="contact developer" className="desktopMenuImg" />
                    Contact Me
                </button>

                <img src={menu} alt="menu" className='burgerMenu' onClick={() => setShowMenu(!showMenu)} />
                <div className="mobileMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                    <Link className="mobileMenuItem" activeClass='active' to='top' offset={-150} smooth={true} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
                    <Link className="mobileMenuItem" activeClass='active' to='intro' spy={true} offset={-200} smooth={true} duration={500} onClick={() => setShowMenu(false)}>About</Link>
                    <Link className="mobileMenuItem" activeClass='active' to='skills' spy={true} offset={-150} smooth={true} duration={500} onClick={() => setShowMenu(false)}>Skills</Link>
                    <Link className="mobileMenuItem" activeClass='active' to='projects' spy={true} offset={-150} smooth={true} duration={500} onClick={() => setShowMenu(false)}>Projects</Link>
                    <Link className="mobileMenuItem" activeClass='active' to='contactSection' spy={true} offset={-150} smooth={true} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>

                </div>

            </nav>
        </div>
    )
}

export default Navbar;