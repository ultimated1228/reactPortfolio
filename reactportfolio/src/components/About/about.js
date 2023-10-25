import React from 'react';
import './about.css';
import bg from '../../assets/logo-noBG.png';
import hireMe from '../../assets/hireMe.png';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Steve Meyer</span><br /> </span>
                Full Stack Web Developer
                <p className="introPara">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly web applications.</p>
                <Link>
                    <button className="btn">
                        <img src={hireMe} alt='hire me' className="btnImg" />
                        <p>Hire Me</p>
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className='hero' />
        </section>
    )
}

export default About;