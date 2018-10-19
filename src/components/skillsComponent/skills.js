import React, { Component } from "react";


// imports
import "../../assets/bundles/skillsComponent/skills.min.css";

// components 
import ProgressBar from "../progressBarComponent/progressBar";

class Skills extends Component {
    render () {
        return (
            <div className="skills-container">
                <ProgressBar/>
            </div>
        );
    }
}

export default Skills;
