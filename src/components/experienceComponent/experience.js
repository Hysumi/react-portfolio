import React, { Component } from "react";

// includes
import "../../assets/bundles/experienceComponent/experience.min.css";

class Experience extends Component {
    render () {
        return (
            <div className="elementContainer elementContainer--experience">
                <h1 className="mainTitle mainTitle--experience">Experience</h1>
                <section className="timeline__container">
                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">Guni</h2>
                            <div className=" timeline__content__info">
                                <div className="timeline__content__info__title">
                                    Full Stack Developer
                                </div>
                                <span className="timeline__content__info__date">
                                    November 2018 - Present
                                </span>
                            </div>
                            <p>College social network that offers intelligence and a complete agenda of university events.</p>
                            <ul className="content__skills">
                                <li>Scrum</li>
                                <li>Angular</li>
                                <li>Ionic 3</li>
                                <li>Firebase</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">Linx</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    Full Stack Developer
                                </span>
                                <span className="timeline__content__info__date">
                                    July 2017 - October 2018
                                </span>
                            </div>
                            <p>Linx is a software management company that provides services to a diverse set of customers from retail sector.</p>
                            <ul className="content__skills">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Git</li>
                                <li>C# (.NET)</li>
                                <li>Ionic 1</li>
                                <li>SQL Server</li>
                                <li>Scrum</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <span className="mainTitle mainTitle--company">Graduation - Bachelor in Computer Science.</span>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">PET</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    Scholarship Student
                                </span>
                                <span className="timeline__content__info__date">
                                    April 2014 - May 2017
                                </span>
                            </div>
                            <p>PET (Tutorial Education Program) is an extracurricular program from UNESP (São Paulo State University) created to develop academic activities.
                            The main goal of the program is to expand knowledge from the University to another fields that are not part of the classes.</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">LTIA</h2>
                            <div className=" timeline__content__info">
                                <div className="timeline__content__info__title">
                                    Game Developer & Project Manager
                                </div>
                                <span className="timeline__content__info__date">
                                    September 2012 - June 2017
                                </span>
                            </div>
                            <p>The LTIA (Applied Information Technology Laboratory) is a lab at UNESP (São Paulo State University) for students to learn new forthcoming technologies through projects with external institutions and companies. The main goal is that students learn and apply new technologies while developing a real project.</p>
                            <ul className="content__skills">
                                <li>Scrum</li>
                                <li>Unity</li>
                                <li>Git</li>
                                <li>C#</li>
                                <li>Kinect</li>
                                <li>Oculus Rift</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <span className="mainTitle mainTitle--experience">Start of academic experience.</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
