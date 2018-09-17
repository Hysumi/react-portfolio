import React, { Component } from "react";

// imports
import "../../Assets/css/skills.min.css";

class Hexagonal extends Component {
    constructor (props) {
        super(props);

        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick () {
        this.props.changeActive(this.props.name);
    }

    render () {
        let hexClass = "hexagon";

        if (this.props.name === this.props.activeName) {
            hexClass = "hex-selected " + this.props.class;
        }

        return (
            <div onClick={this.toggleClick} className={hexClass}>
                <svg role="img" viewBox={this.props.viewBox} xmlns="http://www.w3.org/2000/svg">
                    <circle cx={this.props.circle.cx} cy={this.props.circle.cy} r={this.props.circle.r}/>
                    {this.props.path.map((d, i) =>
                        <path key={i} d={d}/>)}
                </svg>
            </div>
        );
    }
}

export default Hexagonal;
