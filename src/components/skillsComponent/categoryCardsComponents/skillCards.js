import React, { Component } from "react";

// components
import BasicCategoryCard from "./categoryCards";

// imports
import "../../../Assets/css/skills_basicLevelTechCard.min.css";

// data
import Icons from "../../../mocks/skill-icons-data";

class BasicCard extends Component {
    render () {
        return (
            <div className="cardContainer">
                <BasicCategoryCard/>
                <div className="iconContainer">
                    <h2 className="line"><span>Lv. 5</span></h2>
                    <svg role="img" viewBox={Icons[1].viewBox} xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-html" key={Icons[1].key} d={Icons[1].path}/>
                    </svg>
                    <h2 className="line"><span>HTML</span></h2>
                </div>
            </div>
        );
    }
}

export default BasicCard;
