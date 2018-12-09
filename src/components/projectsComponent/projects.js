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
                <h1 className="mainTitle">Personal Projects</h1>
                <p className="description">In this section you can see some of my personal projects.</p>
                <div className="cardsContainer">
                    {ProjectsData.map((proj, i) =>
                        <BlogCard key={i} project={proj}/>)}
                </div>
            </div>
        );
    }
}

export default Projects;
