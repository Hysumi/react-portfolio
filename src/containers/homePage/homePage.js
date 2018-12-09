import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../assets/bundles/homePage/homePage.min.css";

// components
import Skills from "../../components/skillsComponent/skills";
import Experience from "../../components/experienceComponent/experience";
import Projects from "../../components/projectsComponent/projects";
import Footer from "../../components/footerComponent/footer";
import Language from "../../components/languageComponent/language";

class HomePage extends Component {

    render () {
        return (
            <div className="mainContainer">
                <Language/>
                <div className="contentContainer">
                    <Element className="element" name="skills">
                        <Skills/>
                    </Element>
                    <Element className="element element--reverseColor" name="experience">
                        <Experience/>
                    </Element>
                    <Element className="element" name="projects">
                        <Projects/>
                    </Element>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
