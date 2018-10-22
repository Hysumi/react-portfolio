import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../assets/bundles/homePage/homePage.min.css";

// components
import Skills from "../../components/skillsComponent/skills";
import Experience from "../../components/experienceComponent/experience";

class HomePage extends Component {

    render () {
        return (
            <div className="mainContainer">
                <div className="contentContainer">
                    <Element className="element" name="skills">
                        <Skills/>
                    </Element>
                    <Element className="element element--reverseColor" name="experience">
                        <Experience/>
                    </Element>
                </div>
            </div>
        );
    }
}

export default HomePage;
