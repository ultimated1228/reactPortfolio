import React from 'react';
import './about.css';
import hero from '../../assets/hero.png';
import hireMe from '../../assets/hireMe.png';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span >I'm <span className="introName">Steve Meyer</span><br /> </span>
                <span className="introTitle">Full Stack Web Developer</span>
                <p className="introPara">Extensive business experience combined with a passion for great user experiences, always keeps function and form at top of mind</p>
                <Link>
                    <button className="btn">
                        <img src={hireMe} alt='hire me' className="btnImg" />
                        <p>Hire Me</p>
                    </button>
                </Link>
            </div>
            <img src={hero} alt="Profile" className='hero' />
        </section>
    )
}

export default About;