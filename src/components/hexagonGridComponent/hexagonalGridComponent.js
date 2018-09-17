import React, { Component } from "react";

// components
import Hexagonal from "./hexagonComponent";

// imports
import "../../Assets/css/skills.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class HexagonalGrid extends Component {

    constructor (props) {
        super(props);

        this.state = {
            activeHex: ""
        };

        this.changeHexActive = this.changeHexActive.bind(this);
    }

    changeHexActive (newHex) {
        if (this.state.activeHex === newHex) {
            this.setState({
                activeHex: ""
            });
        } else {
            this.setState({
                activeHex: newHex
            });
        }
    }


    render () {
        return (
            <div className="hexagon-container">
                {Icons.map((icon, i) =>
                    <Hexagonal key={i}
                        changeActive={this.changeHexActive}
                        activeName={this.state.activeHex}
                        name={icon.name}
                        path={icon.path}
                        circle={icon.circle}
                        viewBox={icon.viewBox}
                        class={icon.class}
                    />)}
            </div>
        );
    }
}

export default HexagonalGrid;
