import React from 'react';
import './projects.css';
import logo from "../../assets/logo1.png"
import BB from "../../assets/BrainBalance.png"
import link from "../../assets/link.png"
import github from "../../assets/githubLink.png"
import morningRoutine from "../../assets/morningroutine.png"
import ecomm from "../../assets/ecomm.png"
import ticketHandler from "../../assets/tickethandler.png"

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectSub">Here are some of my projects.  Use the links below each project to see the live site or details of the repo.</span>
            
                <div className="heroProjectCard">
                    <img src={ecomm} alt="ecommerce Project Example" className="heroProjectImg" />
                    <span className="projectDesc">eCommerce Site</span>
                    <span className="projectTech">HTML/React/graphQL/express/tailwind</span>
                    <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
                <section id="projectCards">
                <div className="singleProjectCard">
                    <img src={BB} alt="Brain Balance Project Photo" className="projectImg" />
                    
                    <span className="projectDesc">Brain Balance Task List</span>
                    <span className="projectTech">HTML/CSS/JS/Axios & Youtube APIs</span>
                    <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
                <div className="singleProjectCard">
                    <img src={ticketHandler} alt="Ticket Handler Project Example" className="projectImg" />
                    <span className="projectDesc">Internal IT Ticket Handler</span>
                    <span className="projectTech">Handlebars/Tailwind/nodeJS/Sequelize/mySQL/Heroku</span>
                    <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
                <div className="singleProjectCard">
                    <img src={logo} alt="" className="projectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                    <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
                <div className="singleProjectCard">
                    <img src={morningRoutine} alt="Morning Routine Example" className="projectImg" />
                    <span className="projectDesc">Morning Routine App</span>
                    <span className="projectTech">HTML/CSS/JS/Heroku/Twilio API for sending texts</span>
                    <div id="projectDetails">
                    <img src={link} className='linkIcon' alt='link to live project' />
                    <img src={github} className='linkIcon' alt='link to project repo' />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Projects