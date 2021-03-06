import React from "react";
import styles from "../modules/AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Handshake is a decentralized, permissionless naming protocol. Handshake
        will power the new internet revolution of decentralisation. We are
        selling our collection of Handshake TLDs and SLDs.
        <a href="https://learn.namebase.io/">Learn more about Handshake.</a>
      </p>
    </div>
  );
}
