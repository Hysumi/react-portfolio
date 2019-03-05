import React, { Component } from "react";
import { Link } from "react-scroll";

// imports
import "../../assets/bundles/aboutComponent/about.min.css";

class About extends Component {
    render () {
        return (
            <div className="about-container">
                <div className="content">
                    <div className="profile-image"></div>
                    <h4 className="name-title">Henrique Sumitomo</h4>
                    <div className="info">
                        <p>
                            {
                                this.props.lang === "br"
                                    ? "desenvolvedor full stack"
                                    : "full stack developer"
                            }
                        </p>
                        <p>&</p>
                        <p>
                            {
                                this.props.lang === "br"
                                    ? "desenvolvedor de jogos nas horas vagas."
                                    : "game developer during free time."
                            }
                        </p>
                    </div>
                </div>
                <div className="link-container">
                    <Link className="see-more"
                        to="skills"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        <span className="see-more-text">
                            {
                                this.props.lang === "br"
                                    ? "Veja mais abaixo!"
                                    : "See more below!"
                            }
                        </span>
                    </Link>
                </div>

            </div>
        );
    }
}

export default About;
