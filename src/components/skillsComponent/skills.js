import React, { Component } from "react";


// imports
import "../../assets/bundles/skillsComponent/skills.min.css";

// components
import ProgressBar from "../progressBarComponent/progressBar";

class Skills extends Component {
    render () {
        return (
            <div className="skills__container">
                <div className="skills__grid">
                    <div className="skills">
                        <ProgressBar/>
                    </div>
                    <div className="metric">2</div>
                </div>
            </div>
        );
    }
}

export default Skills;
