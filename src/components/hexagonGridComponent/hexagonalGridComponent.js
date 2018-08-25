import React, { Component } from "react";

// components
import Hexagonal from "./hexagonComponent";

// imports
import "../../Assets/css/skills.min.css";

class HexagonalGrid extends Component {
    render () {
        return (
            <div>
                <Hexagonal/>
                <Hexagonal/>
                <Hexagonal/>
            </div>
        );
    }
}

export default HexagonalGrid;
