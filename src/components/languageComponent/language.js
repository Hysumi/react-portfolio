import React, { Component } from "react";

// includes
import "../../assets/bundles/languageComponent/language.min.css";

class Language extends Component {

    render () {
        return (
            <div className="languageContainer">
                Idiomas:
                <img className="languageIcon" src={require("../../assets/icons/brasil.png")} alt=""></img>
                <img className="languageIcon" src={require("../../assets/icons/usa.png")} alt=""></img>
            </div>
        );
    }
}

export default Language;
