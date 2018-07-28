import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router
} from "react-router-dom";

// Containers
import Home from "./containers/Home/Home";

class App extends Component {
    render () {
        return (

            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}

export default App;
