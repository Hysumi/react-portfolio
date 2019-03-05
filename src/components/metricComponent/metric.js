import React, { Component } from "react";

// imports
import "../../assets/bundles/metricComponent/metric.min.css";

class Metric extends Component {
    renderBrMetric = () => {
        return (
            <div>
                <section className="metric-content">
                    <h1 className="main-title main-title--skills">Métrica</h1>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--basic">Básico - Conhecendo a tecnologia</h5>
                    <h6 className="sec-title sec-title__level">Nível 1:</h6>
                    <p>Li sobre o conteúdo.</p>
                    <h6 className="sec-title sec-title__level">Nível 2:</h6>
                    <p>Estudei o conteúdo.</p>
                    <h6 className="sec-title sec-title__level">Nível 3:</h6>
                    <p>Implementei o básico para saber como usar a tecnologia</p>
                    <h6 className="sec-title sec-title__level">Nível 4:</h6>
                    <p>Usei a tecnologia em um projeto, mas o projeto ainda não foi concluido.</p>
                    <h6 className="sec-title sec-title__level">Nível 5:</h6>
                    <p>Usei a tecnologia em um projeto e o concluí.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--intermediate">Intermediário - Boas práticas</h5>
                    <h6 className="sec-title sec-title__level">Nível 6:</h6>
                    <p>Estudei boas práticas.</p>
                    <h6 className="sec-title sec-title__level">Nível 7:</h6>
                    <p>Implementei exemplos com boas práticas para saber como usar.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--advanced">Avançado - Proficiente em boas práticas</h5>
                    <h6 className="sec-title sec-title__level">Nível 8:</h6>
                    <p>Usei boas práticas em um projeto, mas o projeto ainda não foi concluido</p>
                    <h6 className="sec-title sec-title__level">Nível 9:</h6>
                    <p>Usei as boas práticas em um projeto e o concluí.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--specialist">Expert - Especialista</h5>
                    <h6 className="sec-title sec-title__level">Nível 10:</h6>
                    <p>Atividades extras, como por exemplo contribuir em projetos opensource.</p>
                </section>
            </div>
        );
    }

    renderUsaMetric = () => {
        return (
            <div>
                <section className="metric-content">
                    <h1 className="main-title main-title--skills">Metric</h1>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--basic">Basic - Knowledge about the technology</h5>
                    <h6 className="sec-title sec-title__level">Level 1:</h6>
                    <p>I read about the content.</p>
                    <h6 className="sec-title sec-title__level">Level 2:</h6>
                    <p>I studied the content.</p>
                    <h6 className="sec-title sec-title__level">Level 3:</h6>
                    <p>I implemented basic things to know how to use the technology.</p>
                    <h6 className="sec-title sec-title__level">Level 4:</h6>
                    <p>I used the technology in a project, but the project is not concluded yet</p>
                    <h6 className="sec-title sec-title__level">Level 5:</h6>
                    <p>I used the technology and concluded the project.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--intermediate">Intermediate - Good practices</h5>
                    <h6 className="sec-title sec-title__level">Level 6:</h6>
                    <p>I studied good practices.</p>
                    <h6 className="sec-title sec-title__level">Level 7:</h6>
                    <p>I implemented examples with practices to know how to use.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--advanced">Advanced - Master of good practices</h5>
                    <h6 className="sec-title sec-title__level">Level 8:</h6>
                    <p>I used the good practices in a project, but the project is not concluded yet.</p>
                    <h6 className="sec-title sec-title__level">Level 9:</h6>
                    <p>I used good practices in a project and concluded it.</p>
                </section>
                <section className="metric-content">
                    <h5 className="sec-title sec-title--specialist">Expert - Specialist</h5>
                    <h6 className="sec-title sec-title__level">Level 10:</h6>
                    <p>Extra activities, such as contributing on a opensource project.</p>
                </section>
            </div>
        );
    }

    render () {
        return (
            <article>
                { this.props.lang === "br" ? this.renderBrMetric() : this.renderUsaMetric() }
            </article>
        );
    }
}

export default Metric;
