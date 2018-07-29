import React, { Component } from "react";

// components
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { MobileNavigationBar } from "../MobileNavigationBar/MobileNavigationBar";

import { Header, NavBar, NavigationContainer, NavItem} from "./NavigationBar.style";
import { TitleColor, NavigationUnderline } from "../../theme/variables";

export class NavigationBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            toggleOn: false
        };

        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick () {
        this.setState({
            toggleOn: !this.state.toggleOn
        });
    }

    render () {
        return (
            <Header>
                <NavBar>
                    <ToggleButton toggleClick={this.toggleClick} isClicked={this.state.toggleOn}/>
                    <NavigationContainer>
                        <NavItem navigationcolor={TitleColor} maincolor={NavigationUnderline} to="/">
                            Home
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={NavigationUnderline} to="/">
                            About Me
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={NavigationUnderline} to="/">
                            Skills
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={NavigationUnderline} to="/">
                            Projects
                        </NavItem>
                        <NavItem navigationcolor={TitleColor} maincolor={NavigationUnderline} to="/">
                            Contact
                        </NavItem>
                    </NavigationContainer>
                </NavBar>
                <MobileNavigationBar toggleOn={this.state.toggleOn}/>
            </Header>
        );
    }
}

export default NavigationBar;
