import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// includes
import "../../Assets/css/header.min.css";

const delta = 5;
const navbarHeight = 70;

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lastScrollTop: 0,
            navClass: "nav-down"
        };

        this.scrollToTop = this.scrollToTop.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);

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
        this.hasScrolled();
    }
    /*
     * End Show/Hide on Scroll Methods
     */

    render () {
        return (
            <header className={this.state.navClass}>
                <div className="navigationBar">
                    <div className="navigationContainer">
                        <div className="navItem" onClick={this.scrollToTop}>
                            Home
                        </div>
                        <Link
                            to="aboutMe"
                            smooth={true}
                            duration={800}
                            offset={-70}>
                            <div className="navItem">
                                About Me
                            </div>
                        </Link>

                        <div className="navItem">
                            Skills
                        </div>
                        <div className="navItem">
                            Projects
                        </div>
                        <div className="navItem" onClick={this.scrollToBottom}>
                            Contact
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
