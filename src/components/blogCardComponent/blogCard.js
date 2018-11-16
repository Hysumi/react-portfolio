import React, { Component } from "react";

// imports
import "../../assets/bundles/blogCardComponent/blogCard.min.css";

class BlogCard extends Component {
    render () {
        return (
            <div className="blogCardContainer">
                <div className="imageContainer">
                    <img className="imageCard" src={require("../../assets/images/democracy.jpg")} alt=""></img>
                </div>
                <div className="blogDescription">
                    <h1 className="mainTitle">Learning to Code</h1>
                    <h5 className="secTitle">SubTitle</h5>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                </div>
            </div>
        );
    }
}

export default BlogCard;
