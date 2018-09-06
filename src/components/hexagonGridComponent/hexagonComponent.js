import React, { Component } from "react";

// imports
import "../../Assets/css/skills.min.css";

class Hexagonal extends Component {
    render () {
        return (
            <div className={this.props.class}>
                <svg aria-labelledby={this.props.arialabelledby} role="img" viewBox="0 0 24 24" xmlns={this.props.xmlns}>
                    <title id={this.props.id}></title>
                    <path d={this.props.path}/>
                </svg>
            </div>
        );
    }
}

export default Hexagonal;
