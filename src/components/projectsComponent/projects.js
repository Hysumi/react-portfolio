import React, { Component } from "react";

// imports
import "../../assets/bundles/projectsComponent/projects.min.css";

// components
import BlogCard from "../blogCardComponent/blogCard";

// data
import ProjectsData from "../../mocks/projects-data";

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            heightClass: "elementContainer"
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount () {
        this.checkViewHeight();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions () {
        this.checkViewHeight();
    }

    checkViewHeight () {
        if (this.projectContainer.clientHeight < window.innerHeight) {
            this.setState({
                heightClass: "elementContainer elementContainer--projects"
            });
        } else {
            this.setState({
                heightClass: "elementContainer"
            });
        }
    }

    render () {
        return (
            <div className={ this.state.heightClass }
                ref={ (projectContainer) => this.projectContainer = projectContainer}>
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
