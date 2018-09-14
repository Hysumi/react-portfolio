import React, { Component } from "react";

// imports
import "../../Assets/css/skills.min.css";

class Hexagonal extends Component {
    render () {
        return (
            <div className={this.props.class}>
                <svg role="img" viewBox={this.props.viewBox} xmlns="http://www.w3.org/2000/svg">
                    <path d={this.props.path}/>
                </svg>
            </div>
        );
    }
}

export default Hexagonal;