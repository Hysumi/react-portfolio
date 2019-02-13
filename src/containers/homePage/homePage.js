import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../assets/bundles/homePage/homePage.min.css";

// components
import Skills from "../../components/skillsComponent/skills";
import Experience from "../../components/experienceComponent/experience";
import Projects from "../../components/projectsComponent/projects";
import Footer from "../../components/footerComponent/footer";

class HomePage extends Component {

    render () {
        return (
            <div className="mainContainer">
                <div className="contentContainer">
                    <Element className="element" name="skills">
                        <Skills lang={this.props.lang}/>
                    </Element>
                    <Element className="element element--reverseColor" name="experience">
                        <Experience lang={this.props.lang}/>
                    </Element>
                    <Element className="element" name="projects">
                        <Projects lang={this.props.lang}/>
                    </Element>
                </div>
                <Footer lang={this.props.lang}/>
            </div>
        );
    }
}

export default HomePage;
