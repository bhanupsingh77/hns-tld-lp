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
        <Link to="/tld/category/topPicks">
          <h3 className={styles.text}>Top Picks</h3>
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link to="/tld/category/emojis">
          <h3 className={styles.text}>Emojis</h3>
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link to="/tld/category/twoLetter">
          <h3 className={styles.text}>Two Letter</h3>
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link to="/tld/category/threeLetter">
          <h3 className={styles.text}>Three Letter</h3>
        </Link>
      </div>
      <div className={styles.categoryItem}>
        <Link to="/tld/category/names">
          <h3 className={styles.text}>Adult Names</h3>
        </Link>
      </div>
    </div>
  );
}
