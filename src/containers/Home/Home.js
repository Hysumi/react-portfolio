import React, { Component } from "react";
import { FeatureContainer } from "./Home.style";
import { Container } from "../../theme/grid";

export default class Home extends Component {
    render () {
        return (
            <Container>
                <FeatureContainer>
                    Hello World
                </FeatureContainer>

            </Container>
        );
    }
}
