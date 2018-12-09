import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Header from "./components/headerComponent/header";
import Language from "./components/languageComponent/language";
import Homepage from "./containers/homePage/homePage";

// imports
import "./assets/bundles/config/config.min.css";
import "./assets/bundles/containers/containers.min.css";
import "./assets/bundles/icons/icons.min.css";

class App extends Component {

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
            <Router>
                <div className="App">
                    <Header lang={this.state.lang} />
                    <Language setLang={this.setLanguage}/>
                    <Route exact path="/react-portfolio" component={Homepage} />
                </div>
            </Router>
        );
    }
}

export default App;
