import React, { Component } from "react";

// imports
import "../../assets/bundles/progressBarComponent/progressBar.min.css";

// data
import Icons from "../../mocks/skill-icons-data";

class ProgressBar extends Component {

    renderSkillLevel () {
        return (<div class="skill__level"></div>);
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
                            {skillRows[i].map(this.renderSkillLevel)}
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default ProgressBar;
