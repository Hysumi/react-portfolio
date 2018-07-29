import React, { Component } from "react";
import { FeatureContainer } from "./NavigationShowHide.style";

// components
import { NavigationBar } from "../NavigationBar/NavigationBar";

export class NavigationShowHide extends Component {
    render () {
        return (
            <NavigationBar/>
        );
    }
}

export default NavigationShowHide;
