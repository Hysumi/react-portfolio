import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// includes
import "../../assets/bundles/headerComponent/header.min.css";

const delta = 5;
const navbarHeight = 70;

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lastScrollTop: 0,
            navClass: "nav-down",
            navClicked: false
        };

        this._timeout = null;

        this.scrollToTop = this.scrollToTop.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.navClicked = this.navClicked.bind(this);

        this.hideHeader = this.hideHeader.bind(this);
        this.showHeader = this.showHeader.bind(this);
        this.hasScrolled = this.hasScrolled.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount () {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.handleScroll);
    }

    scrollToTop () {
        scroll.scrollToTop();
    }

    scrollToBottom () {
        scroll.scrollToBottom();
    }

    navClicked () {
        this.setState({
            navClicked: true
        });
    }

    /*
     * Start Show/Hide on Scroll Methods
     */

    hideHeader () {
        this.setState({
            navClass: "nav-up"
        });
    }

    showHeader () {
        this.setState({
            navClass: "nav-down"
        });
    }

    getDocHeight () {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    hasScrolled () {
        const st = window.scrollY;
        if (Math.abs(this.state.lastScrollTop - st) <= delta) {
            return;
        }
        if (st > this.state.lastScrollTop && st > navbarHeight) {
            // Scroll Down
            this.hideHeader();
        } else {
            // Scroll Up
            if (st < this.getDocHeight()) {
                this.showHeader();
            }
        }
        this.setState({
            lastScrollTop: st
        });
    }

    handleScroll (event) {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }

        this._timeout = setTimeout(() => {
            this._timeout = null;
            if (this.state.navClicked) {
                this.setState({
                    navClass: "nav-up",
                    navClicked: false
                });
            }
        }, 100);

        this.hasScrolled();
    }
    /*
     * End Show/Hide on Scroll Methods
     */

    renderBrHeader = () => {
        return (
            <div className="nav-bar__container">
                <div className="nav-bar__item" onClick={this.scrollToTop}>
                    Sobre
                </div>
                <div className="nav-bar__item" onClick={this.navClicked}>
                    <Link className="nav-bar__link"
                        to="skills"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Habilidades
                    </Link>
                </div>
                <div className="nav-bar__item">
                    <Link className="nav-bar__link"
                        to="experience"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Experiência
                    </Link>
                </div>
                <div className="nav-bar__item">
                    <Link className="nav-bar__link"
                        to="projects"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Projetos
                    </Link>
                </div>
                <div className="nav-bar__item" onClick={this.scrollToBottom}>
                    Contato
                </div>
            </div>
        );
    }

    renderUsaHeader = () => {
        return (
            <div className="nav-bar__container">
                <div className="nav-bar__item" onClick={this.scrollToTop}>
                    <Link className="nav-bar__link"
                        to="skills"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        About Me
                    </Link>
                </div>
                <div className="nav-bar__item" onClick={this.navClicked}>
                    <Link className="nav-bar__link"
                        to="skills"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Skills
                    </Link>
                </div>
                <div className="nav-bar__item">
                    <Link className="nav-bar__link"
                        to="experience"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Experience
                    </Link>
                </div>
                <div className="nav-bar__item">
                    <Link className="nav-bar__link"
                        to="projects"
                        smooth={true}
                        duration={800}
                        offset={0}>
                        Projects
                    </Link>
                </div>
                <div className="nav-bar__item" onClick={this.scrollToBottom}>
                    Contact
                </div>
            </div>
        );
    }

    render () {
        return (
            <header className={this.state.navClass}>
                <div className="nav-bar">
                    { this.props.lang === "br" ? this.renderBrHeader() : this.renderUsaHeader() }
                </div>
            </header>
        );
    }
}

export default Header;
