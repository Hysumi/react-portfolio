import React, { Component } from "react";

// imports
import "../../assets/bundles/metricComponent/metric.min.css";

class Metric extends Component {
    render () {
        return (
            <article>
                <section>
                    <h1 className="mainTitle">Metric</h1>
                </section>
                <section>
                    <h5 className="secTitle secTitle--basic">Basic - Knowing the technology</h5>
                    <h6 className="secTitle secTitle__level">Level 1:</h6>
                    <p>I read about the content.</p>
                    <h6 className="secTitle secTitle__level">Level 2:</h6>
                    <p>I studied the content.</p>
                    <h6 className="secTitle secTitle__level">Level 3:</h6>
                    <p>I implemented the basic to know how to use the technology.</p>
                    <h6 className="secTitle secTitle__level">Level 4:</h6>
                    <p>I used the technology in a project, but the project isn't concluded yet.</p>
                    <h6 className="secTitle secTitle__level">Level 5:</h6>
                    <p>I used the technology and concluded the project.</p>
                </section>
                <section>
                    <h5 className="secTitle secTitle--intermediate">Intermediate - Good practices</h5>
                    <h6 className="secTitle secTitle__level">Level 6:</h6>
                    <p>I studied good practices.</p>
                    <h6 className="secTitle secTitle__level">Level 7:</h6>
                    <p>I implemented the better practices to know how to use.</p>
                </section>
                <section>
                    <h5 className="secTitle secTitle--advanced">Advanced - Mastering good practices.</h5>
                    <h6 className="secTitle secTitle__level">Level 8:</h6>
                    <p>I used the good practices in a project, but the project isn't concluded yet.</p>
                    <h6 className="secTitle secTitle__level">Level 9:</h6>
                    <p>I used the good practices and concluded the project.</p>
                </section>
                <section>
                    <h5 className="secTitle secTitle--specialist">Expert - Specialist</h5>
                    <h6 className="secTitle secTitle__level">Level 10:</h6>
                    <p>Extra activities.</p>
                </section>
            </article>
        );
    }
}

export default Metric;
