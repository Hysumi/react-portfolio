import React, { Component } from "react";

// components
import Hexagonal from "./hexagonComponent";

// imports
import "../../Assets/css/skills.min.css";

class HexagonalGrid extends Component {
    render () {
        return (
            <div className="hexContainer">
                <div className="hexGrid">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>

                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>

                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>

                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>

                    <Hexagonal/>
                    <Hexagonal/>
                </div>
            </div>
        );
    }
}

export default HexagonalGrid;
