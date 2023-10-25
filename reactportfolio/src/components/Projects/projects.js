import React from 'react';
import './projects.css';
import logo from "../../assets/logo1.png"

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectSub">Some details about this section</span>
            <section id="projectCards">
                <div className="heroProjectCard">
                    <img src={logo} alt="" className="heroProjectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                </div>
               
                <div className="singleProjectCard">
                    <img src={logo} alt="" className="projectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                </div>
                <div className="singleProjectCard">
                    <img src={logo} alt="" className="projectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                </div>
                <div className="singleProjectCard">
                    <img src={logo} alt="" className="projectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                </div>
                <div className="singleProjectCard">
                    <img src={logo} alt="" className="projectImg" />
                    <span className="projectDesc">Project Title</span>
                    <span className="projectTech">Technologies used</span>
                </div>
            </section>
        </section>
    );
}

export default Projects