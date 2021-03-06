import React, { Component } from "react";

// imports
import "../../assets/bundles/blogCardComponent/blogCard.min.css";

class BlogCard extends Component {

    renderPublishedLink () {
        if (this.props.project.publishedLink !== "") {
            return (
                <span className="blog-website-button">
                    { this.props.lang === "br" ? "ou visite a" : "or go to" }
                    <span className="blog-website-button blog-website-button__link"
                        onClick={ () => window.open( `${ this.props.project.publishedLink }`, "_blank")}>
                        { this.props.lang === "br" ? "página" : "website" }
                    </span>
                    .
                </span>
            );
        }
    }

    render () {
        return (
            <div className="blog-card-container">
                <div className="image-container">
                    <img className="image-card" src={this.props.project.coverImage} alt=""></img>
                </div>
                <div className="blog-description">
                    <h1 className="main-title">{this.props.project.title}</h1>
                    <div className="blog-sub-container">
                        <h5 className="sec-title">
                            { this.props.lang === "br" ? "Veja mais:" : "See more at:" }
                        </h5>
                        <svg className="link-icon link-icon--git"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={ () => window.open( `${ this.props.project.gitLink }`, "_blank")}>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>

                        { this.renderPublishedLink() }
                    </div>
                    <p>
                        { this.props.lang === "br" ? this.props.project.brDescription : this.props.project.usaDescription }
                    </p>
                    <ul className="blog-technologies">
                        {this.props.project.technologies.map((tech, i) =>
                            <li key={i} >{tech}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BlogCard;
