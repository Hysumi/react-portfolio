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
                                <li>Scrum</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <span className="mainTitle mainTitle--experience">End of academic experience.</span>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--experience">PET</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    Bolsista
                                </span>
                                <span className="timeline__content__info__date">
                                    April 2014 - May 2017
                                </span>
                            </div>
                            <p>O PET (Programa de Educação Tutorial) é um programa extracurricular da UNESP que desenvolve atividades acadêmicas visando expandir o conhecimento universitário para diversas áreas não apresentadas dentro do conteúdo curricular da universidade.</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--experience">LTIA</h2>
                            <div className=" timeline__content__info">
                                <div className="timeline__content__info__title">
                                    Game Developer & Project Manager
                                </div>
                                <span className="timeline__content__info__date">
                                    September 2012 - June 2017
                                </span>
                            </div>
                            <p>O LTIA (Laboratório de Tecnologia da Informação Aplicada) é um laboratório pertencente a UNESP cujo o intuito é estudar tecnologias novas e emergentes no mercado, desenvolvendo e aplicando-as.</p>
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
