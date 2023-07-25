import React from "react";
import styles from "./HeroSection.module.css";
import phoneLogo from "../assets/images/phone.svg";
import heroImg from "../assets/images/hero-section.svg";

function HeroSection() {
  return (
    <section id={styles.hero}>
      <div id={styles.heroContainer} className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroContentH1}>
            Quality cleaning for your home
          </h1>
          <p className={styles.heroContentP}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles.info}>
            <a className={styles.heroBtn} href="najot-talim.uz">
              Get a free quote
            </a>
            <div className={styles.call}>
              <a href="tel: (414) 567 - 2109">
                <img src={phoneLogo} alt="" />
              </a>
              <div className={styles.callUsNow}>
                <p>Call us now</p>
                <a href="najot-talim.uz">(414) 567 - 2109</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
