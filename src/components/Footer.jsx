import React, { Component } from "react";
import brandLogo from "../assets/images/brand-logo.svg";
import styles from "./Footer.module.css";
export class Footer extends Component {
  render() {
    return (
      <footer id={styles.footer}>
        <div id={styles.footerContainer} className="container">
          <div className={styles.footerTop}>
            <div className={styles.cleaning}>
              <h1> Quality cleaning for your home</h1>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className={styles.boxes}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
              </div>
            </div>
            <div className={styles.contact}>
              <h4>Contact us</h4>
              <a href="address">
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </a>
              <a href="tel: (414) 567 - 2109">(414) 567 - 2109</a>
              <a href="mailto: contact@cleaning.com">contact@cleaning.com</a>
            </div>
            <div className={styles.hours}>
              <h4>Hours</h4>
              <div className={styles.top}>
                <h5>Monday to Friday</h5>
                <p>6:00 AM - 9:00 PM</p>
              </div>
              <div className={styles.bottom}>
                <h5>Saturday & Sunday</h5>
                <p>8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className={styles.free}>
              <h4>Get a free estimate</h4>
              <span>(414) 567 - 2109</span>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="najot-talim.uz">Request a free quote</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.left}>
              <a href="najot-talim.uz">
                <img src={brandLogo} alt="" />
              </a>
            </div>
            <div className={styles.right}>
              <span>Copyright © Cleaning X | Designed by </span>
              <a href="najot-talim.uz">BRIX Templates</a>
              <span>  - Powered by </span>
              <a href="najot-talim.uz">Webflow</a>
              <span> - </span>
              <a href="najot-talim.uz">Licenses</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
