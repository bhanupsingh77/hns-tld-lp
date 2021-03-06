import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../modules/Header.module.css";

export default function Header() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [onScroll, setOnScroll] = useState(false);
  const [path, setPath] = useState();
  const location = useLocation();

  const onClickLink = (e) => {
    // e.preventDefault();
    console.log(location.pathname);
  };

  const onNavbarScroll = () => {
    if (window.scrollY >= 5) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  const onHamburgerClick = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  window.addEventListener("scroll", onNavbarScroll);

  return (
    <header
      className={
        onScroll
          ? styles.navbarContainer + " " + styles.navbarScroll
          : styles.navbarContainer
      }
    >
      <Link
        to="/"
        onClick={(e) => onClickLink(e)}
        className={styles.navbarLogo}
      >
        Domain Market
      </Link>
      <nav
        className={
          isNavbarActive
            ? styles.navbarWrapper + " " + styles.navbarActive
            : styles.navbarWrapper
        }
      >
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <Link
              to="/tld"
              className={styles.navbarText}
              onClick={onHamburgerClick}
            >
              TLD
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              to="sld"
              className={styles.navbarText}
              onClick={onHamburgerClick}
              onClick={(e) => onClickLink(e)}
            >
              SLD
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              to="aboutUs"
              className={styles.navbarText}
              onClick={onHamburgerClick}
            >
              About Us
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              to="contactUs"
              className={styles.navbarText}
              onClick={onHamburgerClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          isNavbarActive
            ? styles.hamburger + " " + styles.toggle
            : styles.hamburger
        }
        onClick={onHamburgerClick}
      >
        <div className={styles.arrow1}></div>
        <div className={styles.arrow2}></div>
        <div className={styles.arrow3}></div>
      </div>
    </header>
  );
}
