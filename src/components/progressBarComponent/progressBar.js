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
                <h1>Skills</h1>
                {Icons.map((icon, i) =>
                    <div key={i} className="skillContainer">
                        <p>{icon.name}</p>
                        <p>Lv: {icon.level}</p>
                        <div className="skill">
                            {skillRows[i].map((row, j) => (this.renderSkillLevel(row, j)))}
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default ProgressBar;
