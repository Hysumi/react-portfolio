import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Homepage from "./containers/homePage/homePage";

// imports
import "./assets/bundles/config/config.min.css";
import "./assets/bundles/containers/containers.min.css";
import "./assets/bundles/icons/icons.min.css";

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/react-portfolio" render={() => <Homepage/>} />
                </div>
            </Router>
        );
    }
}

export default App;
