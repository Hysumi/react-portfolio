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
            isMetricScrollHide: true
        };

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop () {
        var offsetScroll = 0;
        if (!this.state.isMetricScrollHide) {
            offsetScroll = -218;
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
                <h1 className="mainTitle mainTitle--skills">
                    Habilidades
                </h1>
                <p className="description">
                    Nesta sessão você poderá ver quais tecnologias eu conheço e meu nível de habilidade com cada uma. Medi o meu nível baseado na métrica abaixo.
                </p>
                <div className="metrics__container">
                    <input type="checkbox" className="showMetrics__state" id="showMetrics" />
                    <div className="showMetrics__wrap">
                        <div className="showMetrics__target">
                            <Element name="metric">
                                <Metric lang={ this.props.lang }/>
                            </Element>
                        </div>
                    </div>
                    <label
                        seemetric="Clique aqui para ver a métrica!"
                        hidemetric="Ocultar a métrica."
                        htmlFor="showMetrics"
                        className="showMetrics__trigger"
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
                <h1 className="mainTitle mainTitle--skills">
                    Skills
                </h1>
                <p className="description">
                    In this section you can see which technologies i know and my skill level in each one. I measured my level based on the metric below.                </p>
                <div className="metrics__container">
                    <input type="checkbox" className="showMetrics__state" id="showMetrics" />
                    <div className="showMetrics__wrap">
                        <div className="showMetrics__target">
                            <Element name="metric">
                                <Metric lang={ this.props.lang }/>
                            </Element>
                        </div>
                    </div>
                    <label
                        seemetric="Click here to see the metric!"
                        hidemetric="Hide the metric."
                        htmlFor="showMetrics"
                        className="showMetrics__trigger"
                        onClick={ this.scrollToTop }>
                    </label>
                </div>
                <ProgressBar lang={ this.props.lang }/>
            </div>

        );
    }

    render () {
        return (
            <div className="elementContainer elementContainer--skills">
                { this.props.lang === "br" ? this.renderBrSkills() : this.renderUsaSkills() }
            </div>
        );
    }
}

export default Skills;
