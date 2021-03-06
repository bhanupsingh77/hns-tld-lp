import React from "react";
import styles from "../modules/TopPicks.module.css";

export default function TopPicks() {
  const EmojisList = [
    {
      name: "cryptocracy",
      link: "https://www.namebase.io/domains/cryptocracy",
    },
    {
      name: "digitaltutors",
      link: "https://www.namebase.io/domains/digitaltutors",
    },
    {
      name: "dailyrecordnews",
      link: "https://www.namebase.io/domains/dailyrecordnews",
    },
    { name: "bio-punk", link: "https://www.namebase.io/domains/bio-punk" },
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
