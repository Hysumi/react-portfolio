import React, { Component } from "react";

// imports
import "../../Assets/css/skills.min.css";

class Hexagonal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            toggleClass: "hexagon",
            toggleOn: true
        };

        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick () {
        this.setState({
            toggleOn: !this.state.toggleOn
        });

        if (!this.state.toggleOn) {
            this.setState({
                toggleClass: "hexagon"
            });
        } else {
            this.setState({
                toggleClass: "hex-selected " + this.props.class
            });
        }
    }

    render () {
        return (
            <div onClick={this.toggleClick} className={this.state.toggleClass}>
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
