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
                <p className="description">In this section you can see what technologies i know and what is my mastery level with each one.
                    To measure my mastery, I created a metric to define my skill levels.</p>
                <div className="metrics__container">
                    <input type="checkbox" className="showMetrics__state" id="showMetrics" />
                    <div className="showMetrics__wrap">
                        <div className="showMetrics__target">
                            <Metric/>
                        </div>
                    </div>
                    <label htmlFor="showMetrics" className="showMetrics__trigger">
                    </label>
                </div>

                <div className="skills__grid">
                    <div className="skills">
                        <ProgressBar/>
                    </div>
                    <div className="metric">
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
