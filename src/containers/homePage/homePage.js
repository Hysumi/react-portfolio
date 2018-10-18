import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../assets/bundles/homePage/homePage.min.css";

// components
import Skills from "../../components/skillsComponent/skills";

class HomePage extends Component {

    render () {
        return (
            <div className="mainContainer">
                <div className="contentContainer">
                    <Element name="skills">
                        <Skills/>
                    </Element>
                </div>
            </div>
        );
    }
}

export default HomePage;
