import React from "react";
import { Link } from "react-router-dom";
import styles from "../modules/TldCategoryList.module.css";

export default function TldCategoryList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>TOP LEVEL Domain CATOGORY</h2>
      </div>
      <div className={styles.categoryItem}>
        <Link className={styles.text} to="/tld/category/topPicks">
          Top Picks
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link className={styles.text} to="/tld/category/emojis">
          Emojis
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link className={styles.text} to="/tld/category/twoLetter">
          Two Letter
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link className={styles.text} to="/tld/category/threeLetter">
          Three Letter
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link className={styles.text} to="/tld/category/names">
          Adult Names
        </Link>
      </div>
    </div>
  );
}
