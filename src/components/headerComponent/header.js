import React, { Component } from "react";

// components


class HeaderCenter extends Component {
    render () {
        return (
            <section className="center">
                <h1>
                Still Waiting for the Revolution After All These Years
                    <span className="metadata">Chapter 2 - More Bacon</span>
                </h1>
            </section>
        );
    }
}

const delta = 5;
const navbarHeight = 70;

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            didScroll: true,
            lastScrollTop: 0,
            navClass: "nav-down"
        };

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

        // Make sure they scroll more than delta
        if (Math.abs(this.state.lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > this.state.lastScrollTop && st > navbarHeight) {
            // Scroll Down
            this.hideHeader();
        } else {
            // Scroll Up
            // if(st + window.outerHeight < this.getDocHeight()) {
            //   this.showHeader();
            // }
            if (st < this.getDocHeight()) {
                this.showHeader();
            }
        }

        this.setState({
            lastScrollTop: st
        });

    }

    handleScroll (event) {
        this.setState({
            didScroll: true
        });

        this.hasScrolled();

    }
    render () {
        return (
            <header id='navbar' className={this.state.navClass}>
                <article>
                    <HeaderCenter />
                </article>
            </header>
        );
    }
}

export default Header;
