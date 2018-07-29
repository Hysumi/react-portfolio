import React, { Component } from "react";

// imports
import "../../Assets/css/aboutme.min.css";

class AboutMe extends Component {
    render () {
        return (
            <section id="cd-timeline" class="cd-container">
                <div class="cd-timeline-block">
                    <div class="cd-timeline-img">
			        </div>
                    <div class="cd-timeline-content">
                        <h2>Linx</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Mobile & Web Developer
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                Jul/2017 – Presente
                            </span>
                        </div>
                        <p>Empresa de software de gestão para o varejo atendendo os mais diversos segmentos desse mercado.
                            Atualmente estou na Linx de Bauru atuando como desenvolvedor Full Stack.</p>
                        <ul class="content-skills">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>Ionic 1</li>
                            <li>Cordova</li>
                            <li>AngularJs</li>
                            <li>C# .NET</li>
                            <li>SQL Server</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img">
                    </div>
                    <div class="cd-timeline-content">
                        <h2>Fim da Universidade</h2>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img">
			        </div>
                    <div class="cd-timeline-content">
                        <h2>PET – Programa de Educação Tutorial</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                Abr/2014 – Mai/2017
                            </span>
                        </div>
                        <p>Programa extracurricular que desenvolve atividades acadêmicas visando expandir o conhecimento universitário para diversas áreas não apresentadas dentro do conteúdo curricular da universidade.
                            Desenvolvi materiais de estudo e cursos sobre C#, desenvolvimento de jogos, Unity, introdução a realidade virtual e introdução a realidade aumentada.</p>
                        <ul class="content-skills">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Scrum</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img">
			        </div>
                    <div class="cd-timeline-content">
                        <h2>LTIA - Laboratório de Tecnologia da Informação Aplicada</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Game Developer
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                Set/2012 – Jun/2017
                            </span>
                        </div>
                        <p>Laboratório pertencente a UNESP cujo o intuito é estudar tecnologias novas e emergentes no mercado, desenvolvendo e aplicando-as.
                            Desenvolvi projetos de artes interativas utilizando kinect, jogos na engine Unity utilizando realidade virtual e realidade aumentada,
                            e também atuei como gerente de projeto do aplicativo desenvolvido para o evento Semeng (Semana de Engenharia).</p>
                        <ul class="content-skills">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Scrum</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;
