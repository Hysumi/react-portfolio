import React, { Component } from "react";


// imports
import "../../assets/bundles/skillsComponent/skills.min.css";

// components
import ProgressBar from "../progressBarComponent/progressBar";
import Metric from "../metricComponent/metric";

class Skills extends Component {
    render () {
        return (
            <div className="skills__container">
                <h1 className="mainTitle">Skills</h1>
                <p className="description">In this section you can see what technologies i know and what is my mastery level with each one.</p>
                <div className="skills__grid">
                    <div className="skills">
                        <ProgressBar/>
                    </div>
                    <div className="metric">
                        <Metric/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
