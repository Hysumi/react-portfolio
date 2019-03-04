import React, { Component } from "react";

// includes
import "../../assets/bundles/experienceComponent/experience.min.css";

class Experience extends Component {
    render () {
        return (
            <div className="elementContainer elementContainer--experience">
                <h1 className="mainTitle mainTitle--experience">
                    { this.props.lang === "br" ? "Experiência" : "Experience" }
                </h1>
                <section className="timeline__container">
                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">Guni</h2>
                            <div className=" timeline__content__info">
                                <div className="timeline__content__info__title">
                                    { this.props.lang === "br" ? "Desenvolvedor Full Stack" : "Full Stack Developer" }
                                </div>
                                <span className="timeline__content__info__date">
                                    { this.props.lang === "br" ? "Novembro 2018 - Atual" : "November 2018 - Present" }
                                </span>
                            </div>
                            <p> { this.props.lang === "br" ? "Rede social universitária que oferece inteligência e uma agenda completa dos eventos universitários." :
                                "College social network that offers intelligence and a complete agenda of university events." }</p>
                        </div>
                    </div>
                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">Linx</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    { this.props.lang === "br" ? "Desenvolvedor Full Stack" : "Full Stack Developer" }
                                </span>
                                <span className="timeline__content__info__date">
                                    { this.props.lang === "br" ? "Julho 2017 - Outubro 2018" : "July 2017 - October 2018" }
                                </span>
                            </div>
                            <p>
                                { this.props.lang === "br" ? "Linx é uma empresa de software que provê serviços para o setor de varejo." :
                                    "Linx is a software management company that provides services to a diverse set of customers from retail sector." }</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <span className="mainTitle mainTitle--company">
                                { this.props.lang === "br" ? "Graduação - Bacharelado em Ciência da Computação" : "Graduation - Bachelor in Computer Science." }</span>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">PET</h2>
                            <div className=" timeline__content__info">
                                <span className="timeline__content__info__title">
                                    { this.props.lang === "br" ? "Bolsista" : "Scholarship Student" }
                                </span>
                                <span className="timeline__content__info__date">
                                    { this.props.lang === "br" ? "Abril 2014 - Maio 2017" : "April 2014 - May 2017" }
                                </span>
                            </div>
                            <p> { this.props.lang === "br" ? "O PET (Programa de Educação e Tutoria é um programa extra curricular da UNESP (Universidade do Estado de São Paulo) criado para desenvolver atividades acadêmicas. O principal objetivo do programa é expandir o conhecimento da universidade para outros campos que não vazem parte da grade curricular." :
                                "PET (Tutorial Education Program) is an extracurricular program from UNESP (São Paulo State University) created to develop academic activities.The main goal of the program is to expand knowledge from the University to another fields that are not part of the classes." }</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <h2 className="mainTitle mainTitle--company">LTIA</h2>
                            <div className=" timeline__content__info">
                                <div className="timeline__content__info__title">
                                    { this.props.lang === "br" ? "Desenvolvedor de jogos & Gerente de Projetos" : "Game Developer & Project Manager" }
                                </div>
                                <span className="timeline__content__info__date">
                                    { this.props.lang === "br" ? "Setembro 2012 - Junho 2017" : "September 2012 - June 2017" }
                                </span>
                            </div>
                            <p> { this.props.lang === "br" ? "O LTIA (Laboratório de Tecnologia da Informação Aplicada) é um laboratório da UNESP (Universidade do Estado de São Paulo) para estudantes aprenderem sobre tecnologias emergientes a partir de projetos com instituções e companhias. O objetivo principal é fazer os estudantes aprenderem e aplicarem as novas tecnologias enquanto desenvolvem um projeto real." :
                                "The LTIA (Applied Information Technology Laboratory) is a lab at UNESP (São Paulo State University) for students to learn new forthcoming technologies through projects with external institutions and companies. The main goal is that students learn and apply new technologies while developing a real project." }</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__circle">
                        </div>
                        <div className="timeline__content">
                            <span className="mainTitle mainTitle--experience">
                                { this.props.lang === "br" ? "Início da experiência acadêmica." : "Start of academic experience." }
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
