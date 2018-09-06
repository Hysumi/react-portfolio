import React, { Component } from "react";

// components
import Hexagonal from "./hexagonComponent";

// imports
import "../../Assets/css/skills.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class HexagonalGrid extends Component {
    render () {
        return (
            <div className="hexagon-container">
                {Icons.map((icon, i) =>
                    <Hexagonal key={i}
                        arialabelledby={icon.arialabelledby}
                        role={icon.role}
                        xmlns={icon.xmlns}
                        id={icon.id}
                        path={icon.path}
                        class={icon.class}
                    />)}
            </div>
        );
    }
}

export default HexagonalGrid;
