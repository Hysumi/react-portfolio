import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Header from "./components/headerComponent/header";
import Homepage from "./containers/pages/homePage";

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Homepage} />
                    <br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </Router>
        );
    }
}

export default App;
