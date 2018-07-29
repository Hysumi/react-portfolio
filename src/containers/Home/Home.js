import React, { Component } from "react";
import { FeatureContainer } from "./Home.style";
import { Container } from "../../theme/grid";

// components
import { NavigationShowHide } from "../../components/NavigationShowHide/NavigationShowHide";

export default class Home extends Component {
    render () {
        return (
            <div>
                <NavigationShowHide/>
                <Container>
                    <FeatureContainer>
                        Hello World
                    </FeatureContainer>
                </Container>
            </div>
        );
    }
}
