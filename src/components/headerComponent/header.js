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
            navClass: "header header--down",
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
            navClass: "header header--up"
        });
    }

    showHeader () {
        this.setState({
            navClass: "header header--down"
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
                    navClass: "header header--up",
                    navClicked: false
                });
            }
        }, 100);

        this.hasScrolled();
    }
    /*
     * End Show/Hide on Scroll Methods
     */

    render () {


        return (
            <header className={this.state.navClass}>
                <div className="navBar">
                    <input className="navBar_input" type="checkbox" id="navBar_input" />

                    <label className="menu_icon" htmlFor="navBar_input"> <span className="nav_icon"></span></label>
                    <ul className="navBar_menu">
                        <li>
                            <div className="navigationBar__item" onClick={this.scrollToTop}>
                                Home
                            </div>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                smooth={true}
                                duration={800}
                                offset={0}>
                                <div className="navigationBar__item" onClick={this.navClicked}>
                                    Skills
                                </div>
                            </Link>    
                        </li>
                        <li>
                            <Link
                                to="aboutMe"
                                smooth={true}
                                duration={800}
                                offset={0}>
                                <div className="navigationBar__item">
                                    Experience
                                </div>
                            </Link>    
                        </li>
                        <li> 
                            <div className="navigationBar__item">
                                Projects
                            </div>
                        </li>
                        <li> 
                            <div className="navigationBar__item" onClick={this.scrollToBottom}>
                                Contact
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
