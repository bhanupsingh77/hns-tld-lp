import React from "react";
import styles from "../modules/Footer.module.css";
import img1 from "../assets/Img/Skynet-21.svg";
import img2 from "../assets/Img/Handshake-1.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}> Domain Market</div>
      <div className={styles.logoContainer}>
        <img className={styles.img1} src={img1} alt="logo" />
        <p className={styles.logoText}>+</p>
        <img className={styles.img2} src={img2} alt="logo" />
      </div>
    </footer>
  );
}
