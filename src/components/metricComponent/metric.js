import React, { Component } from "react";

// imports
import "../../assets/bundles/metricComponent/metric.min.css";

class Metric extends Component {
    render () {
        return (
            <article>
                <section>
                    <h1 className="mainTitle">Metric</h1>
                    <p>I created this metric to measure my skill levels. Below are the explanations of each level:</p>
                    
                    <h5 className="title title--basic">Basic - Knowing the technology</h5>
                    <h6 className="title title__level">Level 1:</h6>
                    <p>I read about the content.</p>
                    <h6 className="title title__level">Level 2:</h6>
                    <p>I studied the content.</p>
                    <h6 className="title title__level">Level 3:</h6>
                    <p>I implemented the basic to know how to use the technology.</p>
                    <h6 className="title title__level">Level 4:</h6>
                    <p>I used the technology in a project, but the project isn't concluded yet.</p>
                    <h6 className="title title__level">Level 5:</h6>
                    <p>I used the technology in a concluded project, but it isn't published yet.</p>

                    <h5 className="title title--intermediate">Intermediate - Mastery of basics</h5>
                    <h6 className="title title__level">Level 6:</h6>
                    <p>I studied better practicest.</p>
                    <h6 className="title title__level">Level 7:</h6>
                    <p>I implemented the better practices to know how to use.</p>

                    <h5 className="title title--advanced">Advanced - Mastery of good practices</h5>
                    <h6 className="title title__level">Level 8:</h6>
                    <p>I studied better practicest.</p>
                    <h6 className="title title__level">Level 9:</h6>
                    <p>I implemented the better practices to know how to use.</p>
                </section>
            </article>
        );
    }
}

export default Metric;
