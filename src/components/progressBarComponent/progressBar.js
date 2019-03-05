import React, { Component } from "react";

// imports
import "../../assets/bundles/progressBarComponent/progressBar.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class ProgressBar extends Component {

    renderSkillLevel (lv, key) {
        let skillClass = "skill-level__level skill-level__level--";
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
            <div className="progress-bar-main">
                <h1 className="main-title">{ this.props.lang === "br" ? "Tecnologias" : "Technologies" } </h1>
                <div className="progress-bar-container">
                    {Icons.map((icon, i) =>
                        <div key={i} className="skill-level__container">
                            <div className="skill-level__title-container">
                                <svg className={icon.classIcon} role="img" viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={icon.circle.cx} cy={icon.circle.cy} r={icon.circle.r}/>
                                    {icon.path.map((path, j) =>
                                        <path key={j} d={path.d} fill={path.fill} />)}
                                    {icon.polygon.map((polygon, k) =>
                                        <polygon key={k} points={polygon.points} fill={polygon.fill} />)}
                                </svg>
                                <span className="skill-level__title">{icon.name} - { this.props.lang === "br" ? "Nv:" : "Lv:" }  {icon.level}</span>
                            </div>
                            <div className="skill-level__progress-bar">
                                {skillRows[i].map((row, k) => (this.renderSkillLevel(row, k)))}
                            </div>
                        </div>)}
                </div>

            </div>
        );
    }
}

export default ProgressBar;
