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

    render () {
        return (
            <div className="elementContainer elementContainer--skills">
                <h1 className="mainTitle mainTitle--skills">Skills</h1>
                <p className="description">In this section you can see which technologies i know and my skill level in each one.
                I measured my level based on the metric below.</p>
                <div className="metrics__container">
                    <input type="checkbox" className="showMetrics__state" id="showMetrics" />
                    <div className="showMetrics__wrap">
                        <div className="showMetrics__target">
                            <Element name="metric">
                                <Metric/>
                            </Element>
                        </div>
                    </div>
                    <label htmlFor="showMetrics" className="showMetrics__trigger" onClick={this.scrollToTop}>
                    </label>
                </div>
                <ProgressBar/>
            </div>
        );
    }
}

export default Skills;
