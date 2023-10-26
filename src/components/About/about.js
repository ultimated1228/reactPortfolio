import React from 'react';
import './about.css';
import hero from '../../assets/hero.png';
import hireMe from '../../assets/hireMe.png';

const About = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span >I'm <span className="introName">Steve Meyer</span><br /> </span>
                <span className="introTitle">Full Stack Web Developer</span>
                <p className="introPara">Extensive business experience combined with a passion for great user experiences, always keeps function and form at top of mind</p>
                <a href="https://docs.google.com/document/d/1gBeb0sKdtpOCwVv3Co-TtDkJ7uG0Fgoe/edit?usp=sharing&ouid=101219681311812727445&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                        <img src={hireMe} alt='hire me' className="btnImg" />
                        <p>See Full Resume</p>
                    </button>
                </a>
            </div>
            <img src={hero} alt="Profile" className='hero' />
        </section>
    )
}

export default About;