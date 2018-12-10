import React, { Component } from "react";

// imports
import "../../assets/bundles/projectsComponent/projects.min.css";

// components
import BlogCard from "../blogCardComponent/blogCard";

// data
import ProjectsData from "../../mocks/projects-data";

class Projects extends Component {
    render () {
        return (
            <div className="elementContainer">
                <h1 className="mainTitle">
                    { this.props.lang === "br" ? "Projetos Pessoais" : "Personal Projects" }
                </h1>
                <div className="cardsContainer">
                    {ProjectsData.map((proj, i) =>
                        <BlogCard lang={this.props.lang} key={i} project={proj}/>)}
                </div>
            </div>
        );
    }
}

export default Projects;
