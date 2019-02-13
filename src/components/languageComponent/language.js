import React, { Component } from "react";

// includes
import "../../assets/bundles/languageComponent/language.min.css";

class Language extends Component {

    render () {
        return (
            <div className="languageContainer">
                <img onClick={() => this.props.setLang("br")} className="languageIcon" src={require("../../assets/icons/brasil.png")} alt=""></img>
                <img onClick={() => this.props.setLang("usa")} className="languageIcon" src={require("../../assets/icons/usa.png")} alt=""></img>
            </div>
        );
    }
}

export default Language;
