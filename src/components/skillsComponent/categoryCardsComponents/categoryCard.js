import React, { Component } from "react";

// components

// imports
import "../../../Assets/css/skills.min.css";

class CategoryCard extends Component {
    render () {
        return (
            <div className="ruleCardContainer">
                <div className="titleCard">
                    Básico
                </div>
                <div className="rulesContainer">
                    <div className="rulesContent">
                        <ol className="levelsList">
                            <li className="levelItem oneLine">
                                Li sobre o assunto.
                            </li>
                            <li className="levelItem oneLine">
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
        );
    }
}

export default CategoryCard;
