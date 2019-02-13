import React, { Component } from "react";
import { Element } from "react-scroll";

// includes
import "../../assets/bundles/homePage/homePage.min.css";

// components
import Skills from "../../components/skillsComponent/skills";
import Experience from "../../components/experienceComponent/experience";
import Projects from "../../components/projectsComponent/projects";
import Header from "../../components/headerComponent/header";
import Footer from "../../components/footerComponent/footer";
import Language from "../../components/languageComponent/language";

class HomePage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            lang: "br"
        };

        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage (language) {
        this.setState({
            lang: language
        });
    }

    render () {
        return (
            <div>
                <Language setLang={this.setLanguage}/>

                <div className="parallax-title slide about">
                    <h1>Pure CSS Parallax</h1>
                </div>

                <Element className="element" name="skills">
                    <Skills lang={this.state.lang}/>
                </Element>
                <Element className="element element--reverseColor" name="experience">
                    <Experience lang={this.state.lang}/>
                </Element>
                <Element className="element" name="projects">
                    <Projects lang={this.state.lang}/>
                </Element>
                <Footer lang={this.state.lang}/>
            </div>
        );
    }
}

export default HomePage;
