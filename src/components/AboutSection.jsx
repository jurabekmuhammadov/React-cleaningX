import React, { Component } from "react";
import about1 from "../assets/images/about-1.svg";
import about2 from "../assets/images/about-2.svg";
import about3 from "../assets/images/about-3.svg";
import "./AboutSection.css";
export class AboutSection extends Component {
  render() {
    return (
      <section id="about">
        <div className="container about-container">
          <div className="about-heading">
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="about-cards">
            <div className="card">
              <img src={about1} alt="" />
              <h2>1. Schedule online</h2>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="card">
              <img src={about2} alt="" />
              <h2>2. Pay online easily</h2>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="card">
              <img src={about3} alt="" />
              <h2>3. Get your house cleaned</h2>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="about-btns">
            <a href="najot-talim.uz">
              Get a free quote
            </a>
            <a href="najot-talim.uz">
              Explore services
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
