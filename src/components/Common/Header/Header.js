import React, { Component } from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

import styles from "../Header/Header.module.scss";

// import "../../sass/Header.scss";

import Logo from "../../../assets/images/header-logo.svg";
import DropDown from "../../../assets/images/dropdown-icon.svg";
import DropUp from "../../../assets/images/dropup-icon.svg";

/* dropdown menu jsx code */
const dropDiv = (
  <div className={styles.dropmenu}>
    <button>دانلود مستقیم درمانیتو</button>
    <hr />
    <div className="dropItems">
      <h3>صفحه اصلی</h3>
      <ul>
        <li>
          <Link to="/register_pharmacy">عضویت در داروخانه ها</Link>
        </li>
        <li>
          <Link to="/about_page">درباره ما</Link>
        </li>
        <li>
          <Link to="/contact_page">تماس با ما</Link>
        </li>
        <li>
          <Link to="/faq_page">سوالات متداول</Link>
        </li>
        <li>
          <Link to="/terms_page">قوانین و شرایط</Link>
        </li>
      </ul>
    </div>
  </div>
);

class Header extends Component {
  state = {
    isClicked: true,
    show: false,
  };

  iconchangeHandler = (event) => {
    event.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.items}>
          <Link to="/darmanito-app">
            <img src={Logo} alt="header" />
          </Link>
          <a
            className={styles.dropIcon}
            onClick={this.iconchangeHandler}
            href="hichja"
          >
            <img src={this.state.isClicked ? DropDown : DropUp} alt="header" />
          </a>
          <nav>
            <ul>
              <li>
                <Link to="/darmanito-app">صفحه اصلی</Link>
              </li>
              <li>
                <Link to={{ pathname: "/about_page" }}>درباره ما</Link>
              </li>
              <li>
                <Link to="/contact_page">تماس با ما</Link>
              </li>
              <li>
                <Link to="/register_pharmacy">عضویت داروخانه ها</Link>
              </li>
            </ul>
          </nav>
          <button className={styles.download__btn}>دانلود درمانیتو</button>
        </div>

        {/* dropdown menu in mobile devices only below code */}

        {this.state.show ? dropDiv : null}
      </div>
    );
  }
}

export default Header;
