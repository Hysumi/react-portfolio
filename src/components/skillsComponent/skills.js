import React, { Component } from "react";

// components
import CategoryCard from "./categoryCardsComponents/categoryCard";

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
                    <CategoryCard/>
                </div>
            </div>
        );
    }
}

export default Skills;
