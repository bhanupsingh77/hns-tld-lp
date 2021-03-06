import React from "react";
import styles from "../modules/TwoLetter.module.css";

export default function TwoLetter() {
  const EmojisList = [
    {
      name: "x-7",
      link: "https://www.namebase.io/domains/x-7",
    },
    {
      name: "b_r",
      link: "https://www.namebase.io/domains/b_r",
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
