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
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[1].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-html" key={Icons[1].key} d={Icons[1].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>HTML</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
                <div className="iconContainer">
                    <h2 className="line line-top"><span>Lv. 5</span></h2>
                    <div className="imageContainer">
                        <svg role="img" viewBox={Icons[2].viewBox} xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-sass" key={Icons[2].key} d={Icons[2].path}/>
                        </svg>
                    </div>
                    <h2 className="line line-bottom"><span>SASS</span></h2>
                </div>
            </div>
        );
    }
}

export default BasicCard;
