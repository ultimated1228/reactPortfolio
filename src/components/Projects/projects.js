import React from 'react';
import './projects.css';
import BB from "../../assets/BrainBalance.png"
import link from "../../assets/link.png"
import github from "../../assets/githubLink.png"
import morningRoutine from "../../assets/morningroutine.png"
import ecomm from "../../assets/ecomm.png"
import ticketHandler from "../../assets/tickethandler.png"
import comingSoon from "../../assets/comingsoon.png"

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectSub">Here are some of my projects.  Use the links below each project to see the live site or details of the repo.</span>

            <div className="heroProjectCard">
                <img src={ecomm} alt="ecommerce Project Example" className="heroProjectImg" />
                <span className="projectDesc">eCommerce Site</span>
                <span className="projectTech">COMING SOON Expected completion 11/18</span>
                <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                </div>
            </div>
            <section id="projectCards">
            <div className="singleProjectCard">
                    <img src={comingSoon} alt="" className="projectImg" />
                    <span className="projectDesc">Coming Soon</span>
                    <span className="projectTech">Project will be complete by November 8th</span>
                    <div id="projectDetails">
                        <img src={link} className='linkIcon' alt='link to live project' />
                        <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
                
                <div className="singleProjectCard">
                    <img src={ticketHandler} alt="Ticket Handler Project Example" className="projectImg" />
                    <span className="projectDesc">Internal IT Ticket Handler</span>
                    <span className="projectTech">Handlebars / Tailwind / nodeJS / Sequelize / mySQL / Heroku</span>
                    <div id="projectDetails">
                        <a href="https://cryptoforgetickethandler-ebc122551a85.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={link} className='linkIcon' alt='link to live project' />
                        </a>
                        <a href="https://cryptoforgetickethandler-ebc122551a85.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={github} className='linkIcon' alt='link to project repo' />
                        </a>
                    </div>
                </div>
                <div className="singleProjectCard">
                    <img src={BB} alt="Brain Balance Project Example" className="projectImg" />

                    <span className="projectDesc">Brain Balance Task List</span>
                    <span className="projectTech">HTML / CSS / JS / Axios & Youtube APIs</span>
                    <div id="projectDetails">
                        <a href="https://ultimated1228.github.io/brainBalance/" target="_blank" rel="noopener noreferrer">
                            <img src={link} className='linkIcon' alt='link to live project' />
                        </a>
                        <a href="https://github.com/ultimated1228/brainBalance" target="_blank" rel="noopener noreferrer">
                            <img src={github} className='linkIcon' alt='link to project repo' />
                        </a>
                    </div>
                </div>
                <div className="singleProjectCard">
                    <img src={morningRoutine} alt="Morning Routine Example" className="projectImg" />
                    <span className="projectDesc">Morning Routine App</span>
                    <span className="projectTech">HTML / CSS / JS / Heroku / Twilio API for sending text messages</span>
                    <div id="projectDetails">
                        <a href="https://mysterious-garden-36851-0f6298603722.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={link} className='linkIcon' alt='link to live project' />
                        </a>
                        <a href="https://github.com/ultimated1228/morningRoutine" target="_blank" rel="noopener noreferrer">
                            <img src={github} className='linkIcon' alt='link to project repo' />
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Projects