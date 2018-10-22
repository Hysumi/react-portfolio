import React, { Component } from "react";

// includes
import "../../assets/bundles/experienceComponent/experience.min.css";

// components

class Experience extends Component {
    render () {
        return (
            <div className="elementContainer elementContainer--reverseColor">
                <h1 className="mainTitle mainTitle--reverseColor">Experience</h1>      
                <section className="timeline__container">
                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--experience">Linx</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    Full Stack Developer
                                </span>
                                <span className="timeline__content__info__date">
                                    July 2017 - Present
                                </span>
                            </div>
                            <p>Management software company for the big retail sector serving the most diverse segments of this market.</p>
                            <ul className="content__skills">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Git</li>
                                <li>C# (.NET)</li>
                                <li>Ionic 1</li>
                                <li>SQL Server</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
