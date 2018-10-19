import React, { Component } from "react";


// imports
import "../../assets/bundles/progressBarComponent/progressBar.min.css";

class ProgressBar extends Component {
    render () {
        return (
            <div className="skillsMain">
                <h1>Skills</h1>
                <div className="skillContainer">
                    <p>HTML5</p>
                    <p>90%</p>
                    <div className="skill">
                        <div class="skill__level">
                        </div>
                    </div>
                </div>
                <div className="skillContainer">
                    <p>CSS3</p>
                    <p>85%</p>
                    <div className="skill">
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                        <div class="skill__level">
                        </div>
                    </div>
                </div>
                <div className="skillContainer">
                    <p>Javascript</p>
                    <p>70%</p>
                    <div className="skill">
                        <div class="skill__level">
                        </div>
                    </div>
                </div>
                <div className="skillContainer">
                    <p>C#</p>
                    <p>40%</p>
                    <div className="skill">
                        <div class="skill__level">
                        </div>
                    </div>
                </div>
                <div className="skillContainer">
                    <p>Typescript</p>
                    <p>25%</p>
                    <div className="skill">
                        <div class="skill__level">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
