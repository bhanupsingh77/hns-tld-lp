import React from "react";
import styles from "../modules/ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Contact us</p>
      <a className={styles.link} href="mailto:tldseller@protonmail.com">
        tldseller@protonmail.com
      </a>
    </div>
  );
}
