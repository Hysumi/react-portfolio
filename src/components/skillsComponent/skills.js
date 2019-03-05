import React, { Component } from "react";
import { Element, scroller } from "react-scroll";

// imports
import "../../assets/bundles/skillsComponent/skills.min.css";

// components
import ProgressBar from "../progressBarComponent/progressBar";
import Metric from "../metricComponent/metric";

class Skills extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isMetricScrollHide: true,
            heightClass: "element-container"
        };

        this.updateDimensions = this.updateDimensions.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount () {
        this.checkViewHeight();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions () {
        this.checkViewHeight();
    }

    checkViewHeight () {
        if (this.skillsContainer.clientHeight < window.innerHeight) {
            this.setState({
                heightClass: "element-container element-container--skills"
            });
        } else {
            this.setState({
                heightClass: "element-container"
            });
        }
    }

    scrollToTop () {
        var offsetScroll = 0;
        if (!this.state.isMetricScrollHide) {
            offsetScroll = -218;
            this.setState({
                heightClass: "element-container element-container--skills"
            });
        } else {
            this.setState({
                heightClass: "element-container"
            });
        }
        scroller.scrollTo("metric", {
            smooth:true,
            delay: 0,
            duration: 0,
            offset: offsetScroll
        });
        this.setState({
            isMetricScrollHide: !this.state.isMetricScrollHide
        });
    }

    renderBrSkills = () => {
        return (
            <div>
                <h1 className="main-title main-title--skills">
                    Habilidades
                </h1>
                <p className="description">
                    Nesta seção você poderá ver quais tecnologias eu conheço e meu nível de habilidade com cada uma. Medi o meu nível baseado na métrica abaixo.
                </p>
                <div className="metrics__container">
                    <input type="checkbox" className="show-metrics__state" id="show-metrics" />
                    <div className="show-metrics__wrap">
                        <div className="show-metrics__target">
                            <Element name="metric">
                                <Metric lang={ this.props.lang }/>
                            </Element>
                        </div>
                    </div>
                    <label
                        seemetric="Clique aqui para ver a métrica!"
                        hidemetric="Ocultar a métrica."
                        htmlFor="show-metrics"
                        className="show-metrics__trigger"
                        onClick={ this.scrollToTop }>
                    </label>
                </div>
                <ProgressBar lang={ this.props.lang }/>
            </div>

        );
    }

    renderUsaSkills = () => {
        return (
            <div>
                <h1 className="main-title main-title--skills">
                    Skills
                </h1>
                <p className="description">
                    In this section you can see which technologies i know and my skill level in each one. I measured my level based on the metric below.                </p>
                <div className="metrics__container">
                    <input type="checkbox" className="show-metrics__state" id="show-metrics" />
                    <div className="show-metrics__wrap">
                        <div className="show-metrics__target">
                            <Element name="metric">
                                <Metric lang={ this.props.lang }/>
                            </Element>
                        </div>
                    </div>
                    <label
                        seemetric="Click here to see the metric!"
                        hidemetric="Hide the metric."
                        htmlFor="show-metrics"
                        className="show-metrics__trigger"
                        onClick={ this.scrollToTop }>
                    </label>
                </div>
                <ProgressBar lang={ this.props.lang }/>
            </div>

        );
    }

    render () {
        return (
            <div className={ this.state.heightClass }
                ref={ (skillsContainer) => this.skillsContainer = skillsContainer}>
                { this.props.lang === "br" ? this.renderBrSkills() : this.renderUsaSkills() }
            </div>
        );
    }
}

export default Skills;
