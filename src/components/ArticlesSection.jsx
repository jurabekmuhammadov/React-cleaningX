import React, { Component } from "react";
import articles1 from "../assets/images/articles-1.png";
import articles2 from "../assets/images/articles-2.png";
import "./ArticlesSection.css";

export class ArticlesSection extends Component {
  render() {
    return (
      <section id="articles">
        <div className="container articles-container">
          <div className="articles-heading">
            <h1>Articles & resources</h1>
            <div className="articles-btns">
              <a href="najot-talim.uz">Get a free quote</a>
              <a href="najot-talim.uz">Browse articles</a>
            </div>
          </div>
          <div className="articles-cards">
            <div className="card">
              <img src={articles1} alt="" />
              <div className="content">
                <h3>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="bottom">
                  <span>Jan 28, 2022</span>
                  <div className="box"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={articles2} alt="" />
              <div className="content">
                <h3>
                  How to properly disinfect your phone and other electronics
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="bottom">
                  <span>Feb 1, 2022</span>
                  <div className="box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ArticlesSection;
