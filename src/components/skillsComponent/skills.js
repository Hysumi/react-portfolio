import React, { Component } from "react";

// components

// imports
import "../../Assets/css/skills.min.css";

class Skills extends Component {
    render () {
        return (
            <div className="skills-container">
                <h1>Skills</h1>
                <p>Classifiquei minhas habilidades em 3 Categorias: Básico, Intermediário e Avançado.</p>
                <p>Em cada Categoria, classifico meu conhecimento técnico com base no que estudei e/ou desenvolvi em níveis de 1 à 10.</p>

                <div className="skills-flex-container">
                    <div className="cards techContainer teste">
                        <div className="rulesContainer">
                            <div className="titleCard">
                                Básico
                            </div>
                            <div className="rulesContent">
                                <ol className="levelsList">
                                    <li className="levelItem">
                                        Li sobre o assunto.
                                    </li>
                                    <li className="levelItem">
                                        Estudei sobre o Assunto.
                                    </li>
                                    <li className="levelItem">
                                        Implementei o básico para saber como usar.
                                    </li>
                                    <li className="levelItem">
                                        Utilizei em um projeto, mas ainda não finalizei o projeto.
                                    </li>
                                    <li className="levelItem">
                                        Utilizei em um projeto que está finalizado, mas não publicado.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
