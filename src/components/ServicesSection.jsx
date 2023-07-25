import React, { Component } from "react";
import services1 from "../assets/images/services-1.png";
import services2 from "../assets/images/services-2.png";
import services3 from "../assets/images/services-3.png";
import "./ServicesSection.css";
export class ServicesSection extends Component {
  render() {
    return (
      <section id="services">
        <div className="container services-container">
          <div className="services-heading">
            <h1>Our Services</h1>
            <a href="najot-talim.uz">Explore services</a>
          </div>
          <div className="services-cards">
            <div className="card">
              <img src={services1} alt="" />
              <h3>House cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card">
              <img src={services2} alt="" />
              <h3>Office cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card">
              <img src={services3} alt="" />
              <h3>Industrial cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
        <div className="container banner">
          <div className="content">
            <span>Covid-19 sanitization</span>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesSection;
