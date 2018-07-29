import React, { Component } from "react";


// includes
import "../../Assets/css/default.min.css";

// components
import AboutMe from "../../components/aboutmeComponent/aboutMe";

class HomePage extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="container-content">
                    <AboutMe/>
                </div>
            </div>
        );
    }
}

export default HomePage;
