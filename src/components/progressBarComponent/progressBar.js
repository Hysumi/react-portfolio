import React, { Component } from "react";

// imports
import "../../assets/bundles/progressBarComponent/progressBar.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class ProgressBar extends Component {

    renderSkillLevel (lv, key) {
        let skillClass = "skillLevel__level skillLevel__level--";
        if (lv <= 4) {
            skillClass += "basic";
        } else if (lv > 4 && lv < 7) {
            skillClass += "intermediate";
        } else {
            skillClass += "advanced";
        }
        return (
            <div key={key}className={skillClass}></div>
        );
    }

    render () {
        let skillRows = [];
        Icons.forEach((icon) => {
            let skillRow = [];
            for (let index = 0; index < icon.level; index++) {
                skillRow.push(index);
            }
            skillRows.push(skillRow);
        });
        return (
            <div className="progressBarMain">
                <h1>{ this.props.lang === "br" ? "Tecnologias" : "Technologies" } </h1>
                <div className="progressBarContainer">
                    {Icons.map((icon, i) =>
                        <div key={i} className="skillLevel__container">
                            <div className="skillLevel__titleContainer">
                                <svg className={icon.classIcon} role="img" viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={icon.circle.cx} cy={icon.circle.cy} r={icon.circle.r}/>
                                    {icon.path.map((d, j) =>
                                        <path key={j} d={d}/>)}
                                </svg>
                                <span className="skillLevel__title">{icon.name} - { this.props.lang === "br" ? "Nv:" : "Lv:" }  {icon.level}</span>
                            </div>
                            <div className="skillLevel__progressBar">
                                {skillRows[i].map((row, k) => (this.renderSkillLevel(row, k)))}
                            </div>
                        </div>)}
                </div>

            </div>
        );
    }
}

export default ProgressBar;
