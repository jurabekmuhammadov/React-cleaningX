import { Component } from "react";
import styles from "./Header.module.css";
import brandLogo from "../assets/images/brand-logo.svg";

export class Header extends Component {
  render() {
    return (
      <header>
        <div id={styles.headerContainer} className="container">
          <div className={styles.left}>
            <a href="najot-talim.uz">
              <img src={brandLogo} alt="brand-logo" />
            </a>
            <ul className={styles.menu}>
              <li>
                <a href="najot-talim.uz">Home</a>
              </li>
              <li>
                <a href="najot-talim.uz">About</a>
              </li>
              <li>
                <a href="najot-talim.uz">Services</a>
              </li>
              <li>
                <a href="najot-talim.uz">Articles</a>
              </li>
              <li>
                <a href="najot-talim.uz">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <p>Cart (0)</p>
            <a href="najot-talim.uz" className={styles.headerBtn}>Get a free quote</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
