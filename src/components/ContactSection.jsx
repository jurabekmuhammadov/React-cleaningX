import React, { Component } from "react";
import phone from "../assets/images/phone.svg";
import "./ContactSection.css"
export class ContactSection extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container contact-container">
          <div className="left">
            <div className="top">
              <h1>Contact Us</h1>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="call">
                <a href="tel: (414) 567 - 2109">
                  <img src={phone} alt="" />
                </a>
                <div className="callUs">
                  <p>Call us now</p>
                  <a href="tel: (414) 567 - 2109">(414) 567 - 2109</a>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="bottom">
              <h3>Not convinced yet?</h3>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <a href="najot-talim.uz">Browse our packages</a>
            </div>
          </div>
          <div className="right">
            <form action="#">
              <input type="text" required placeholder="Full name" />
              <input type="text" required placeholder="Last name" />
              <input type="address" required placeholder="Address" />
              <input type="email" required placeholder="Email" />
              <input type="text" required placeholder="Requested service" />
              <input type="text" required placeholder="Day of service" />
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="5"
                placeholder="Add a Note"
              ></textarea>
              <button type="submit">Submit message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
