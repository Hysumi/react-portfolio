import React, { Component } from "react";

// includes
import "../../assets/bundles/languageComponent/language.min.css";

class Language extends Component {


    render () {
        return (
            <div className="language-container">
                <img onClick={() => this.props.setLang("br")} className="language-icon" src={require("../../assets/icons/brasil.png")} alt=""></img>
                <img onClick={() => this.props.setLang("usa")} className="language-icon" src={require("../../assets/icons/usa.png")} alt=""></img>
            </div>
        );
    }
}

export default Language;
