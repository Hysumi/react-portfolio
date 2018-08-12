import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../Assets/css/default.min.css";

// components
import Skills from "../../components/skillsComponent/skills";
import AboutMe from "../../components/aboutmeComponent/aboutMe";

class HomePage extends Component {

    render () {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container-content">
                        <Element name="skills">
                            <Skills/>
                        </Element>
                        <Element name="aboutMe">
                            <AboutMe/>
                        </Element>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
