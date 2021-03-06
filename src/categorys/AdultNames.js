import React from "react";
import styles from "../modules/AdultNames.module.css";

export default function AdultNames() {
  const EmojisList = [
    {
      name: "coxporn",
      link: "https://www.namebase.io/domains/coxporn",
    },
    {
      name: "pornihd",
      link: "https://www.namebase.io/domains/pornihd",
    },
    {
      name: "oyporn",
      link: "https://www.namebase.io/domains/oyporn",
    },
  ];

  return (
    <div className={styles.container}>
      {EmojisList.map((e, i) => {
        return (
          <a className={styles.item} key={i} href={e.link} target="_blank">
            {e.name}
          </a>
        );
      })}
    </div>
  );
}
