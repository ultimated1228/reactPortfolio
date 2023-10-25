import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'> What I do </span>
            <span className='skillDesc'>Through my time at the UC-Irvine coding bootcamp I was introduced to the following languages, frameworks, and database management systems. During and after the bootcamp at least one application was deployed using each of the below technologies: </span>
            <section id="skillTags">
                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap logo" className="langIcon" />
                    <div className="skillTagText">Bootstrap</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" alt="Bulma logo" className="langIcon" />
                    <div className="skillTagText">Bulma</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo" className="langIcon" />
                    <div className="skillTagText">CSS3</div>
                </div>

                <div className="tagElements">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express" className="langIcon">
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5.00 4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2.00-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8.00 13.47-15.00 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12.00 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3.00 78.92 2.00 71.39c-.15-1.2-.46-2.38-.70-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15.00-.12-25.78 11.02-26.43 27.57"></path>
                    </svg>
                    <div className="skillTagText">Express</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git logo" className="langIcon" />
                    <div className="skillTagText">Git</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL logo" className="langIcon" />
                    <div className="skillTagText">GraphQL</div>
                </div>

                <div className="tagElements">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="handlebars" className="langIcon">
                        <path d="M14.59 62.67a7.14 7.14 0 002.31-3.48c.46-2 .36-3.94-2.31-5.3C7.82 50.47 3.45 56.57 2.77 58s-1.74 3.68-1 8.84 3.19 9.9 11 11.73a32.89 32.89 0 0022-2.57c6.84-3.26 19.7-9 22.94-9.58a28.15 28.15 0 016.49-.81v-7.85a18 18 0 00-17.38-9.15C34.43 49.59 29.51 56 26.49 58.7s-8.61 9.17-12.37 8-4.81-5.7-3.48-7.14 2.37-1.18 3.18 0a6.24 6.24 0 01.77 3.11z"></path><path d="M113.41 62.67a7.14 7.14 0 01-2.31-3.48c-.46-2-.36-3.94 2.31-5.3 6.76-3.43 11.13 2.67 11.81 4.11s1.74 3.68 1 8.84-3.19 9.9-11 11.73A32.89 32.89 0 0193.23 76c-6.84-3.26-19.7-9-22.94-9.58a28.15 28.15 0 00-6.49-.81v-7.85a18 18 0 0117.38-9.15c12.39 1 17.32 7.38 20.34 10.08s8.61 9.17 12.37 8 4.81-5.76 3.48-7.19-2.37-1.18-3.18 0a6.24 6.24 0 00-.78 3.17z"></path>
                    </svg>
                    <div className="skillTagText">Handlebars</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="Heroku logo" className="langIcon" />
                    <div className="skillTagText">Heroku</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" className="langIcon" />
                    <div className="skillTagText">HTML5</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS logo" className="langIcon" />
                    <div className="skillTagText">JavaScript</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" className="langIcon" />
                    <div className="skillTagText">MongoDB</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mySQL" className="langIcon" />
                    <div className="skillTagText">mySQL</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodeJS" className="langIcon" />
                    <div className="skillTagText">nodeJS</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" className="langIcon" />
                    <div className="skillTagText">React</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize logo" className="langIcon" />
                    <div className="skillTagText">Sequelize</div>
                </div>

                <div className="tagElements">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind logo" className="langIcon" />
                    <div className="skillTagText">Tailwind</div>
                </div>



            </section>
        </section>
    )
}

export default Skills;