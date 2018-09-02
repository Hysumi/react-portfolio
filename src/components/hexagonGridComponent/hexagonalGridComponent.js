import React, { Component } from "react";

// components
import Hexagonal from "./hexagonComponent";

// imports
import "../../Assets/css/skills.min.css";

class HexagonalGrid extends Component {
    render () {
        return (
            <ul id="hexGrid">
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

            </ul>
        );
    }
}

export default HexagonalGrid;
