import React, { Component } from "react";

// imports
import "../../assets/bundles/aboutComponent/about.min.css";

class About extends Component {
    render () {
        return (
            <div className="about-container">
                <div class="content">
                    <div class="profile-image"></div>
                    <div class="info">
                        <p>
                            web designer and developer, student of the gtu. I Love designs and I'm going to change the world.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
