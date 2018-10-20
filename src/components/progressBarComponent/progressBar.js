import React, { Component } from "react";

// imports
import "../../assets/bundles/progressBarComponent/progressBar.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class ProgressBar extends Component {

    renderSkillLevel (lv, key) {
        let skillClass = "skill__level skill__level--";
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
            <div className="skillsMain">
                <h1>Technologies</h1>
                {Icons.map((icon, i) =>
                    <div key={i} className="skillContainer">
                        <div className="skillTitleContainer">
                            <svg className={icon.classIcon} role="img" viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
                                <circle cx={icon.circle.cx} cy={icon.circle.cy} r={icon.circle.r}/>
                                {icon.path.map((d, j) =>
                                    <path key={j} d={d}/>)}
                            </svg>
                            <span className="skillTitle">{icon.name} - Lv: {icon.level}</span>
                        </div>
                        <div className="skill">
                            {skillRows[i].map((row, k) => (this.renderSkillLevel(row, k)))}
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default ProgressBar;
