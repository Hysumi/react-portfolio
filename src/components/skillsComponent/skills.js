import React, { Component } from "react";

// components
import HexagonalGrid from "../hexagonGridComponent/hexagonalGridComponent";

// imports
import "../../Assets/css/skills.min.css";

class Skills extends Component {
    render () {
        return (
            <div>
                <HexagonalGrid/>
            </div>
        );
    }
}

export default Skills;
